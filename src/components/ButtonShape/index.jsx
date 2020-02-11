/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: 8,
    color: theme.palette.text.primary,
  },
}));
const ButtonShape = ({ name }) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} size="small" variant="outlined" color="primary">
      {name}
    </Button>
  );
};

export default ButtonShape;
