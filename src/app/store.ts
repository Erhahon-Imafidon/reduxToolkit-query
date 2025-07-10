import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todosSlice';
import { apiSlice } from '../features/api/apiSlice.ts';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
