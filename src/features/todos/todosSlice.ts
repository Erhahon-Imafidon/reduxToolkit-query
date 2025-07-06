import { createSlice } from '@reduxjs/toolkit';

export type ITodos = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const initialState: ITodos[] = [
    {
        userId: 1,
        id: 0,
        title: '',
        completed: false,
    },
];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
});

export default todoSlice.reducer;
