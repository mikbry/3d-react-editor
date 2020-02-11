/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import GLView from '../../GLView';

const InteractiveView = ({ scene }) => (
  <div style={{ width: '720px', height: '480px', position: 'relative', margin: 'auto' }}>
    <GLView width={720} height={480} scene={scene} />
  </div>
);

export default InteractiveView;
