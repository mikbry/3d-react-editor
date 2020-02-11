/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
  title: {
    padding: 4,
    backgroundColor: theme.palette.background.default,
    minWidth: '100%',
  },
  params: {
    padding: 4,
    minWidth: '100%',
  },
}));

const Inspector = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Inspector :: Scene
      </Typography>
      <div className={classes.params}>Title : scene</div>
      <div className={classes.params}>
        Background
        <br />
        color : #303030FF
      </div>
      <div className={classes.params}>
        Canvas
        <br />
        width : 720
        <br />
        width : 480
      </div>
      <div className={classes.params}>
        Projection <br />
        type : perspective <br />
        FOV : 45 <br />
        zNear : 0.1 <br />
        zFar : 100
      </div>
      <div className={classes.params}>
        Depth
        <br />
        enable : true
      </div>
    </div>
  );
};

export default Inspector;
