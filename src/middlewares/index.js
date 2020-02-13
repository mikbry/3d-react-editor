/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const middlewares = {
  // eslint-disable-next-line no-unused-vars
  importAudio: async ({ files }, prevState, dispatch) => {
    // const state = { ...prevState };
  },

  togglePlay: async (_action, prevState, dispatch) => {
    const state = { ...prevState };
    const { play } = state.video;
    dispatch({ type: 'toggledPlay', play });
  },
};

export default middlewares;
