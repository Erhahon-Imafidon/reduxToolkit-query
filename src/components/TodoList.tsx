import { useState } from 'react';

const TodoList = () => {
    const [newTodo, setTNewTodo] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTNewTodo('');
    };

    const newItemSection = (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Add a new todo item</label>
            <div>
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setTNewTodo(e.target.value)}
                    placeholder="Enter a new todo item"
                />
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                    >
                        <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
                    </svg>
                </button>
            </div>
        </form>
    );

    return (
        <section>
            <h1>Todo List</h1>
            {newItemSection}
        </section>
    );
};
export default TodoList;
