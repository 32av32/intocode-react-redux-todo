import React from 'react';
import styles from './Content.module.css';
import Todo from "./Todo";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../features/reducers/todoReducer";
import {AppDispatch, RootState} from "../../store/store";


export default function Content() {
    const todos = useSelector((state: RootState) => state.todos)
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        dispatch(addTodo({
            id: Date.now(),
            text: value
        }))
        e.preventDefault()
        setValue('')
    }

    return (
        <div className={styles.container}>
            <form name="add_task_form" className={styles.form_todo} onSubmit={(e) => handleSubmit(e)}>
                <input value={value} onChange={e => setValue(e.target.value)} placeholder={'Введите таску...'} name="add_task_input" type="text" className={styles.add_task_input} />
                    <button name="add_task_button" type="submit" className={styles.add_task_button}>
                        <img alt="add" className="add_task_button_ico" src="/assets/add.svg" />
                    </button>
            </form>
            <div className={styles.tasks_list__container}>
                {
                    todos.map((todo, index) => {
                        return <Todo key={todo.id} {...todo} />
                    })
                }
            </div>
        </div>
    )
}