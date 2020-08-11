import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThroughProvider } from "react-through";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ProductDetailReducer from "./store/reducers/ProductDetailReducer";
import SearchReducer from "./store/reducers/SearchReducer";
import HomeReducer from './store/reducers/HomeDetailReducer';
import CartReducer from './store/reducers/cartReducer';
import FavouriteReducer from './store/reducers/Wishlist'
import ProfileReducer from './store/reducers/ProfileReducer'
import NotificationReducer from './store/reducers/NotificationReducer'
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {persistStore,persistReducer} from 'redux-persist';
import authReducer from './store/reducers/AuthReducer'
import storage from 'redux-persist/lib/storage'
// export const history = createBrowserHistory({
//   basename: process.env.PUBLIC_URL
// });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducers = combineReducers({
  product: ProductDetailReducer,
  search:SearchReducer,
  home:HomeReducer,
  cart:CartReducer,
  auth:authReducer,
  profile:ProfileReducer,
  fav:FavouriteReducer,
  notify:NotificationReducer
});
const persistConfig={
  key:'cart',
  storage:storage,
  whitelist:['cart']
}
const pReducer=persistReducer(persistConfig,RootReducers)
const store = createStore(
pReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor=persistStore(store);
export{persistor,store}
const theApp = (
  <Provider store={store}>
    <BrowserRouter forceRefresh={true}>
      <ThroughProvider>
        <App />
      </ThroughProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(theApp, document.getElementById("root"));
registerServiceWorker();
