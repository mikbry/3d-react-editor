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
import { useStore } from '../../store';
import SceneParams from '../../components/SceneParams';

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
  const { state } = useStore();
  const { selectedItem } = state;
  let props;
  let params;
  if (selectedItem.type === 'Scene') {
    props = state.scene.properties;
    // eslint-disable-next-line react/jsx-props-no-spreading
    params = <SceneParams {...props} />;
  } else {
    params = <div>TODO</div>;
  }
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Inspector :: {selectedItem.type}
      </Typography>
      {params}
    </div>
  );
};

export default Inspector;
