/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { FunctionComponent, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ColorPicker } from 'material-ui-color-components';

const projectionTypes = [
  {
    value: 'Perspective',
    label: 'Perspective',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '94%',
    },
  },
}));

interface ColorType {
  value: number;
}

interface BackgroundType {
  color: number | string;
}

interface ProjectionType {
  type: number;
  parameters: { fieldOfView: number; zNear: number; zFar: number };
}

interface BuffersType {
  depth: { enabled: boolean; value: number };
}

type SceneParamsProps = {
  title: string;
  background: BackgroundType;
  canvas: HTMLCanvasElement;
  projection: ProjectionType;
  buffers: BuffersType;
};

const SceneParams: FunctionComponent<SceneParamsProps> = ({ title, background, canvas, projection, buffers }) => {
  const classes = useStyles();
  const [type, setType] = React.useState(projection.type);
  const [backgroundColor, setBackgroundColor] = React.useState(background.color);
  const [depthEnabled, setDepth] = React.useState(buffers.depth.enabled);

  const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setType(Number(event.target.value));
  };

  const handleDepthChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDepth(event.target.checked);
  };

  const handleColorChange = (color: ColorType) => {
    const { value } = color;
    if (value && value !== backgroundColor) {
      setBackgroundColor(value);
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <Grid container alignItems='flex-start' spacing={2}>
        <Grid item xs={12}>
          <TextField id='scene-title' label='Title' value={title} color='secondary' fullWidth margin='dense' />
        </Grid>
      </Grid>
      <Divider />
      <Typography variant='subtitle1'>Background</Typography>
      <Grid container alignItems='flex-start' spacing={2}>
        <Grid item xs={12}>
          <ColorPicker id='scene-background-color' value={backgroundColor} onChange={handleColorChange} />
        </Grid>
      </Grid>
      <Divider />
      <Typography variant='subtitle1'>Canvas</Typography>
      <Grid container alignItems='flex-start' spacing={2}>
        <Grid item xs={6}>
          <TextField
            id='scene-canvas-width'
            label='Width'
            value={canvas.width}
            type='number'
            color='secondary'
            margin='dense'
            InputProps={{
              startAdornment: <InputAdornment position='start'>px</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='scene-canvas-height'
            label='Height'
            value={canvas.height}
            type='number'
            color='secondary'
            margin='dense'
            InputProps={{
              startAdornment: <InputAdornment position='start'>px</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      <Divider />
      <Typography variant='subtitle1'>Projection</Typography>
      <Grid container alignItems='flex-start' spacing={2}>
        <Grid item xs={12}>
          <TextField
            id='scene-projection-type'
            select
            label='Type'
            value={type}
            onChange={handleTypeChange}
            color='secondary'
            fullWidth
            margin='dense'
          >
            {projectionTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id='scene-projection-fov'
            label='FOV'
            value={projection.parameters.fieldOfView}
            type='number'
            color='secondary'
            fullWidth
            margin='dense'
            InputProps={{
              startAdornment: <InputAdornment position='start'>°</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id='scene-projection-znear'
            label='zNear'
            value={projection.parameters.zNear}
            type='number'
            color='secondary'
            margin='dense'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id='scene-projection-zfar'
            label='zFar'
            value={projection.parameters.zFar}
            type='number'
            color='secondary'
            margin='dense'
          />
        </Grid>
      </Grid>
      <Divider />
      <Typography variant='subtitle1'>Buffers</Typography>
      <Grid container alignItems='flex-start' spacing={2}>
        <Grid item xs={8}>
          <TextField
            id='scene-depth'
            label='Depth'
            value={buffers.depth.value}
            type='number'
            fullWidth
            color='secondary'
            margin='dense'
          />
        </Grid>
        <Grid item xs={2} className='App-parameters-switch'>
          <Switch
            checked={depthEnabled}
            onChange={handleDepthChange}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SceneParams;
