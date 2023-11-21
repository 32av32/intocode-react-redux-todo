import React from 'react';
import styles from '../Content.module.css';
import {useDispatch} from "react-redux";
import {deleteTodo, ITodo, toggleFavorite} from "../../../features/reducers/todoReducer";
import {AppDispatch} from "../../../store/store";


export default function Todo({ id, text, is_favorite }: ITodo) {
    const dispatch = useDispatch<AppDispatch>()

    const handleRemove = (id: number): void => {
        dispatch(deleteTodo(id))
    }
    const handleFavorite = (id: number): void => {
        dispatch(toggleFavorite(id))
    }

    return (
        <div className={`${styles.todo_item} + ${is_favorite && styles.favorite}`}>
            <div className={styles.star} onClick={() => handleFavorite(id)}>★</div>
            <div className={styles.task_item_text}>{text}</div>
            <div className={styles.task_item_delete} onClick={() => handleRemove(id)}>
                <img alt='delete_button' src='/assets/icons8-delete-48.svg' />
            </div>
        </div>
    )
}