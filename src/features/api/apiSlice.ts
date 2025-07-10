import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ITodos } from '../todos/todosSlice.ts';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query<ITodos[], void>({
            query: () => '/todos',
            providesTags: ['Todos'],
        }),

        addTodo: builder.mutation<ITodos, Omit<ITodos, 'id'>>({
            query: (newTodo) => ({
                url: '/todos',
                method: 'POST',
                body: newTodo,
            }),
            invalidatesTags: ['Todos'],
        }),

        updateTodo: builder.mutation<
            ITodos,
            Partial<Omit<ITodos, 'id'>> & { id: string }
        >({
            query: (updatedTodo) => ({
                url: `/todos/${updatedTodo.id}`,
                method: 'PATCH',
                body: updatedTodo,
            }),
            invalidatesTags: ['Todos'],
        }),

        deleteTodo: builder.mutation<void, { id: string }>({
            query: ({ id }) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todos'],
        }),
    }),
});

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = apiSlice;
