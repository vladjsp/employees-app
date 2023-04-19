import { configureStore } from '@reduxjs/toolkit';

import employeesSlice from './slices/employeesSlice';

export const store = configureStore({
  reducer: {
    employees: employeesSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
