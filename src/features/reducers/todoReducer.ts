import {createAction, createReducer} from '@reduxjs/toolkit'

export interface ITodo {
    id: number,
    text: string,
    is_favorite: boolean
}

interface IStateTodos {
    todos: ITodo[]
}

const initialState: IStateTodos = {
    todos: []
}

export const addTodo = createAction<{id: number, text: string}>('addTodo')
export const deleteTodo = createAction<number>('deleteTodo')
export const toggleFavorite = createAction<number>('toggleFavorite')

export const todoReducer = createReducer<IStateTodos>(initialState, builder => {
    builder.addCase(addTodo, (state, action) => {
        state.todos.push({...action.payload, is_favorite: false})
    })
        .addCase(deleteTodo, (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload)
        })
        .addCase(toggleFavorite, (state, action) => {
            state.todos = state.todos.map(item => {
                if (item.id === action.payload) {
                    return { ...item, is_favorite: !item.is_favorite }
                }
                return item
            })
        })
})