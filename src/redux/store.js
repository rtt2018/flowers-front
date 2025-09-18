import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/slice.js";
import { flowersReducer } from "./flowers/slice.js";
import { orderReducer } from "./order/slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { shopsReducer } from "./shops/slice.js";
import { ordersListReducer } from "./orders/slice.js";

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["email", "name"],
};

const cartPersistConfig = {
  key: "order",
  storage,
  // whitelist: ["cart, totalPrice"],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, userReducer),
    flowers: flowersReducer,
    order: persistReducer(cartPersistConfig, orderReducer),
    shops: shopsReducer,
    orders: ordersListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
