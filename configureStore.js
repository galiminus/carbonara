import reducers from "./reducers";
import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, reducers)

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);

  return { store, persistor }
}
