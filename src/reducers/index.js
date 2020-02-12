/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const initialState = {
  scene: {
    id: 0,
    properties: {
      title: 'Scene 1',
      canvas: { width: 720, height: 480 },
      background: { color: 'C0C0C0', alpha: 1 },
      projection: { type: 'Perspective', parameters: { fieldOfView: 45.0, zNear: 0.1, zFar: 1000.0 } },
      buffers: { depth: { value: 1.0, enabled: true } },
    },
    elements: [],
  },
  assets: {
    shaders: [],
  },
  selectedItem: { id: 0, type: 'Scene' },
};

export const handlers = {
  setTtitle: state => ({ ...state }),
  importedAudio: (state, action) => {
    const { music } = action;
    const { video } = state;
    video.music = music;
    video.play = true;
    return { ...state, video };
  },
  toggledPlay: (state, action) => {
    const { play } = action;
    const { video } = state;
    video.play = play;
    return { ...state, video };
  },
  toggledRecording: (state, action) => {
    const { isRecording } = action;
    return { ...state, isRecording, videoURL: null };
  },
  recorded: (state, action) => {
    const { isRecording, videoURL } = action;
    return { ...state, isRecording, videoURL };
  },
};
