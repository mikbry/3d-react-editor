/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { handlers, initialState } from './reducers';
import middlewares from './middlewares';

const store = createContext(initialState);
const { Provider } = store;

const useStore = () => useContext(store);

let dispatchStore = null;

const reducer = (state, action) => {
  const func = handlers[action.type];
  if (middlewares[action.type]) {
    middlewares[action.type](action, state, dispatchStore);
    return state; // func ? func(state, action) : state;
  }
  if (func) {
    return func(state, action);
  }
  throw new Error(`Unhandled action type: ${action.type}`);
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  dispatchStore = dispatch;
  return React.createElement(Provider, { value: { state, dispatch } }, children);
};

StoreProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export { store, useStore, StoreProvider };
