/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonShape from '../ButtonShape';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  row: {
    margin: 0,
  },
  cell: {
    marginRight: 8,
    color: theme.palette.text.primary,
  },
}));

const Toolbox = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction='row' justify='flex-start' alignItems='flex-start'>
        <Grid item>
          <ButtonShape name='Plane' />
        </Grid>
        <Grid item>
          <ButtonShape name='Cube' />
        </Grid>
        <Grid item>
          <ButtonShape name='Sphere' />
        </Grid>
        <Grid item>
          <ButtonShape name='Cylinder' />
        </Grid>
        <Grid item>
          <ButtonShape name='Pyramid' />
        </Grid>
        <Grid item>
          <ButtonShape name='Obj' />
        </Grid>
      </Grid>
    </div>
  );
};

export default Toolbox;
