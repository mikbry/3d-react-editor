/**
 * Copyright (c) Mik BRY
 * mik@miklabs.com
 *
 * This source code is licensed under private license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import blueGrey from '@material-ui/core/colors/blueGrey';
import './App.css';
import { StoreProvider } from './store';
import SceneView from './components/SceneView';
import Inspector from './containers/Inspector';
import Explorer from './containers/Explorer';
import Toolbox from './containers/Toolbox';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: blueGrey,
  },
});

function App({ scene }) {
  return (
    <StoreProvider>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="fixed" color="default" className="App-bar">
            <Toolbar>
              <Typography variant="h6" className="App-title">
                3D React Editor
              </Typography>
              <Toolbox />
              <Button color="inherit">Preview</Button>
            </Toolbar>
          </AppBar>
          <Drawer className="App-left-drawer" variant="permanent" anchor="left">
            <div className="App-toolbar" />
            <Explorer />
          </Drawer>
          <main className="App-main">
            <div className="App-container">
              <div className="App-toolbar" />
              <SceneView scene={scene} />
            </div>
          </main>
          <Drawer className="App-right-drawer" variant="permanent" anchor="right">
            <div className="App-toolbar" />
            <Inspector />
          </Drawer>
        </ThemeProvider>
      </div>
    </StoreProvider>
  );
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  scene: PropTypes.object.isRequired,
};

export default App;
