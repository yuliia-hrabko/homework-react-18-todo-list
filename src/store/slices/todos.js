import { createSlice } from "@reduxjs/toolkit";
import {todosApi }from '../api/todos'

const initialState = {
    items: []
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        removeTodo: (state, {payload}) => {
            state.items = state.items.filter(item => item.id !==payload);
        },
        changeStatus: (state, {payload}) => {
            state.items = state.items.map(item => {
                if(item.id === payload) {
                    item.completed = !item.completed;
                }
                return item;
            });
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            todosApi.endpoints.getAllTodos.matchFulfilled,
            (state, {payload}) => {
                state.items = payload;
            }
        )
    }
});

export const {removeTodo, changeStatus} = todosSlice.actions;

export default todosSlice.reducer;