import { configureStore } from "@reduxjs/toolkit";

// Temporary empty reducer
const emptyReducer = (state = {}) => state;

export const store = configureStore({
  reducer: {
    // add a placeholder reducer until you have slices
    placeholder: emptyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
