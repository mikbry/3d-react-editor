import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import url from '@rollup/plugin-url';
import hotcss from 'rollup-plugin-hot-css';
import commonjs from 'rollup-plugin-commonjs-alternate';
import refresh from 'rollup-plugin-react-refresh';
import copy from 'rollup-plugin-copy';
import { string } from 'rollup-plugin-string';

const appName = 'rollupReactApp';
const NODE_ENV = process.env.NODE_ENV || 'development';
const production = NODE_ENV !== 'development' && NODE_ENV !== 'test';
const development = NODE_ENV === 'development';
const outputFile = production ? '/static/js/index' : '/index.[hash]';
const publicUrl = process.env.PUBLIC_URL || 'http://localhost:9000';
const esmFile = `${outputFile}.js`;
const iifeFile = `${outputFile}.legacy.js`;
const styles = development ? '/styles.[hash].css' : 'static/assets/styles.css';

const genScripts = () => {
  let scripts = `<script async type="module" src="${esmFile}"></script>`;
  if (production) {
    scripts += `<script nomodule src="${iifeFile}"></script>`;
  }
  return scripts;
};

const watch = () => ({
  exclude: [
    'build/favicon.ico',
    'build/logo192.png',
    'build/logo512.png',
    'build/manifest.json',
    'build/robots.txt',
    'build/index.html',
  ],
});

const plugins = () => [
  copy({
    targets: [
      {
        src: [
          'public/favicon.ico',
          'public/logo192.png',
          'public/logo512.png',
          'public/manifest.json',
          'public/robots.text',
        ],
        dest: 'build',
      },
      {
        src: 'public/index.html',
        dest: 'build',
        transform: contents =>
          contents
            .toString()
            .replace('%SCRIPTS%', genScripts())
            .replace(/%PUBLIC_URL%/g, publicUrl)
            .replace('%STYLES%', styles),
      },
    ],
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  }),
  url(),
  hotcss({
    hot: development,
    filename: development ? 'styles.css' : 'static/assets/styles.css',
  }),
  typescript(),
  resolve({ extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'] }),
  string({
    include: ['**/*.fs', '**/*.vs'],
  }),
  commonjs({ extensions: ['.js', '.jsx'] }),
  production && terser(),
  development && refresh(),
];

const esm = {
  input: 'src/index.js',
  output: {
    dir: 'build',
    format: 'esm',
    entryFileNames: development ? '[name].[hash].js' : 'static/js/[name].js',
    assetFileNames: development ? '[name].[hash][extname]' : '[name][extname]',
    sourcemap: true,
  },
  watch: watch(),
  plugins: plugins(),
};

const iife = {
  input: 'src/index.ts',
  output: {
    dir: 'build',
    format: 'iife',
    entryFileNames: 'static/js/[name].legacy.js',
    assetFileNames: development ? '[name][hash][extname]' : '[name][extname]',
    name: appName,
    sourcemap: true,
  },
  watch: watch(),
  plugins: plugins(),
};

const config = [esm];
if (production) {
  config.push(iife);
}
export default config;
