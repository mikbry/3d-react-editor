/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const PlaneGeometry = (width = 1, height = 1, extras = {}) => {
  const { orientation = '+Z', offset = 0, columns = 1, rows = 1 } = extras;
  const vertices = new Float32Array();
  const sx = width / rows;
  const sy = height / columns;
  let v00;
  let v01;
  let v10;
  let v11;

  for (let x = -columns / 2; x < columns / 2; x += 1) {
    for (let y = -rows / 2; y < rows / 2; y += 1) {
      // WIP
      if (orientation === '+Z') {
        v00 = [x * sx, y * sy, offset];
        v01 = [x * sx, y * sy + sy, offset];
        v10 = [x * sx + sx, y * sy, offset];
        v11 = [x * sx + sx, y * sy + sy, offset];
        vertices.push(v00, v11, v01 /* triangle 0 */, v00, v10, v11 /* triangle 1 */);
      } else if (orientation === '-Z') {
        v00 = [x * sx, y * sy, -offset];
        v01 = [x * sx, y * sy + sy, -offset];
        v10 = [x * sx + sx, y * sy, -offset];
        v11 = [x * sx + sx, y * sy + sy, -offset];
        vertices.push(v11, v00, v01 /* triangle 0 */, v10, v00, v11 /* triangle 1 */);
      } else if (orientation === '+X') {
        v00 = [offset, y * sy, x * sx];
        v01 = [offset, y * sy + sy, x * sx];
        v10 = [offset, y * sy, x * sx + sx];
        v11 = [offset, y * sy + sy, x * sx + sx];
        vertices.push(v00, v11, v01 /* triangle 0 */, v00, v10, v11 /* triangle 1 */);
      } else if (orientation === '-X') {
        v00 = [-offset, y * sy, x * sx];
        v01 = [-offset, y * sy + sy, x * sx];
        v10 = [-offset, y * sy, x * sx + sx];
        v11 = [-offset, y * sy + sy, x * sx + sx];
        vertices.push(v11, v00, v01 /* triangle 0 */, v10, v00, v11 /* triangle 1 */);
      } else if (orientation === '+Y') {
        v00 = [x * sx, offset, y * sy];
        v01 = [x * sx, offset, y * sy + sy];
        v10 = [x * sx + sx, offset, y * sy];
        v11 = [x * sx + sx, offset, y * sy + sy];
        vertices.push(v00, v11, v01 /* triangle 0 */, v00, v10, v11 /* triangle 1 */);
      } else if (orientation === '-Y') {
        v00 = [x * sx, -offset, y * sy];
        v01 = [x * sx, -offset, y * sy + sy];
        v10 = [x * sx + sx, -offset, y * sy];
        v11 = [x * sx + sx, -offset, y * sy + sy];
        vertices.push(v11, v00, v01 /* triangle 0 */, v10, v00, v11 /* triangle 1 */);
      }
    }
  }
  return { positions: new Float32Array(vertices), size: vertices.length / 3 };
};

export default PlaneGeometry;
