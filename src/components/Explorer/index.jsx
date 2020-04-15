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
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

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
}));

const Explorer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h6' className={classes.title}>
        Explorer
      </Typography>
      <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
        <TreeItem nodeId='1' label='Scene'>
          <TreeItem nodeId='2' label='Plane' />
        </TreeItem>
        <TreeItem nodeId='5' label='Assets'>
          <TreeItem nodeId='6' label='Shaders'>
            <TreeItem nodeId='7' label='shader-one'>
              <TreeItem nodeId='8' label='one.fs' />
              <TreeItem nodeId='9' label='one.vs' />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default Explorer;
