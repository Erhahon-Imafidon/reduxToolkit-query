import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa6';
import { useGetTodosQuery } from '../features/api/apiSlice.ts';

const TodoList = () => {
    const [newTodo, setTNewTodo] = useState('');
    const {
        data: todos,
        isSuccess,
        isLoading,
        isError,
        error,
    } = useGetTodosQuery();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

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
            <div className="w-full rounded-lg border-gray-500 border px-3 py-2">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setTNewTodo(e.target.value)}
                    placeholder="Enter a new todo item"
                    className="placeholder:font-nunito w-full outline-none"
                />
            </div>
            <button className="bg-gray-500 text-white rounded-lg p-2 cursor-pointer">
                <FaUpload className="text-2xl" />
            </button>
        </form>
    );

    let content: React.ReactNode;

    if (isLoading) {
        content = <p className="text-gray-500">Loading...</p>;
    } else if (isSuccess) {
        content = JSON.stringify(todos, null, 2);
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
