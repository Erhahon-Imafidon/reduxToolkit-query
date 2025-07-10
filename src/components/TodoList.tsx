import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} from '../features/api/apiSlice.ts';

const TodoList = () => {
    const [newTodo, setTNewTodo] = useState('');
    const {
        data: todos,
        isSuccess,
        isLoading,
        isError,
        error,
    } = useGetTodosQuery();
    const [addTodo] = useAddTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        addTodo({ userId: 1, title: newTodo, completed: false });
        setTNewTodo('');
    };

    const newItemSection = (
        <form
            onSubmit={handleSubmit}
            className="border border-gray-500 p-6 mt-4 flex items-center gap-4 w-full mb-4"
        >
            <label className="sr-only" htmlFor="new-todo">
                Add a new todo item
            </label>
            <div className="w-full">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setTNewTodo(e.target.value)}
                    placeholder="Enter a new todo item"
                    className="placeholder:font-nunito w-full outline-none rounded-[10px] border-gray-500 border px-3 py-2 focus:border-2"
                />
            </div>
            <button
                className={`${!newTodo ? 'bg-gray-500' : 'bg-green-500'} text-white rounded-lg p-2 cursor-pointer`}
            >
                <FaUpload className="text-2xl" />
            </button>
        </form>
    );

    let content: React.ReactNode;

    if (isLoading) {
        content = <p className="text-gray-500">Loading...</p>;
    } else if (isSuccess) {
        content = todos.map((todo) => (
            <article
                key={todo.id}
                className="flex items-center justify-between gap-5"
            >
                <div className="flex gap-4 items-center">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        id={todo.id || ''}
                        onChange={(e) => {
                            e.stopPropagation();
                            if (todo.id) {
                                updateTodo({
                                    ...todo,
                                    id: todo.id,
                                    completed: !todo.completed,
                                });
                            }
                        }}
                    />
                    <label className="wrap-anywhere">{todo.title}</label>
                </div>
                <button
                    className="cursor-pointer"
                    type="button"
                    onClick={() => todo.id && deleteTodo({ id: todo.id })}
                >
                    <RiDeleteBin6Line className={'text-red-500'} />
                </button>
            </article>
        ));
    } else if (isError) {
        content = <p className="text-red-500">{error.toString()}</p>;
    }

    return (
        <section className="flex flex-col justify-start">
            <h1 className="font-bold text-3xl">Todo List</h1>
            {newItemSection}
            {content}
        </section>
    );
};
export default TodoList;
