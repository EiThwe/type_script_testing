import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./services/counterSlice";
import productsSlice from "./services/productsSlice";
import { productsApi } from "./api/productsApi";
// ...

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    products: productsSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
