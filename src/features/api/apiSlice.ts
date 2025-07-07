import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ITodos } from '../todos/todosSlice.ts';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    endpoints: (builder) => ({
        getTodos: builder.query<ITodos[], void>({
            query: () => '/todos',
        }),

        addTodo: builder.mutation<ITodos, Omit<ITodos, 'id'>>({
            query: (newTodo) => ({
                url: '/todos',
                method: 'POST',
                body: newTodo,
            }),
        }),
    }),
});

export const { useGetTodosQuery, useAddTodoMutation } = apiSlice;
