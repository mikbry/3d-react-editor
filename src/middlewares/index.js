/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const middlewares = {
  /* importAudio: async ({ files }, prevState, dispatch) => {
    const state = { ...prevState };
    console.log('importAudio', files[0]);
    const duration = await window.audioService.playFile(files[0], () => {
      // Music stopped
      window.audioService.stop();
      window.graphicService.stop();
      dispatch({ type: 'toggledPlay', play: false });
    });
    const music = { title: files[0].name, duration, current: 0 };
    console.log('duration', duration);
    window.graphicService.resume();
    state.video.play = true;
    dispatch({ type: 'importedAudio', music, uploadedMedias: files[0] });
  },

  togglePlay: async (_action, prevState, dispatch) => {
    const state = { ...prevState };
    let { play } = state.video;
    if (play) {
      window.audioService.pause();
      window.graphicService.pause();
    } else {
      window.audioService.resume();
      window.graphicService.resume();
    }
    play = !play;
    dispatch({ type: 'toggledPlay', play });
  },

  recordVideo: async (_action, prevState, dispatch) => {
    const state = { ...prevState };
    let { play } = state.video;
    if (play) {
      window.audioService.stop();
      window.graphicService.stop();
    }
    console.log('record video', play);
    play = false;
    dispatch({ type: 'toggledPlay', play });
    dispatch({ type: 'toggledRecording', isRecording: true });
    window.recorderService.start(videoURL => {
      console.log('video recorded');
      dispatch({ type: 'recorded', isRecording: false, videoURL });
    });
  },

  cancelRecording: async (_action, prevState, dispatch) => {
    const state = { ...prevState };
    const { isRecording } = state;
    if (isRecording) {
      window.recorderService.cancel();
      dispatch({ type: 'toggledRecording', isRecording: false });
    }
    console.log('cancel record video', isRecording);
  }, */
};

export default middlewares;
