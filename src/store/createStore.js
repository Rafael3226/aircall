import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import runSagas from "./runSagas";

const devTools = {
  trace: true,
  traceLimit: 25,
};

const defaultMiddlewareConfig = {
  thunk: false,
  serializableCheck: false,
};

const createStoreForModule = (module) => {
  const sagaMiddlewareOptions = {
    onError: (err, stack) => {
      console.error(err, stack, store); // eslint-disable-line
    },
  };

  const sagaMiddleware = createSagaMiddleware(sagaMiddlewareOptions);

  const middleware = [
    ...module.middleware,
    ...getDefaultMiddleware(defaultMiddlewareConfig),
    sagaMiddleware,
  ];

  const store = configureStore({
    devTools,
    middleware,
    reducer: module.reducer,
  });

  runSagas(sagaMiddleware, module.sagas);

  return store;
};

export default createStoreForModule;
