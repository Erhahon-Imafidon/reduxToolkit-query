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
                <button></button>
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
