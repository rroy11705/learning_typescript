import { useState, useRef } from 'react'
import Todo from "./Todo"
import styles from "../styles/TodoList.module.css"
import { ITodoItem } from '../types/todo'

const TodoList = () => {
    const todoCounter = useRef(1);
    const [todoList, setTodoList] = useState<ITodoItem[]>([{
        id: todoCounter.current,
        item: "",
        createdAt: new Date(),
    }])

    const getTime = (date?: Date) => {
        return date != null ? date.getTime() : 0;
    }

    const addToStart = () => {
        const nextId = todoCounter.current + 1;
        setTodoList(prevList => [
            {
                id: nextId,
                item: "",
                createdAt: new Date(),
            },
            ...prevList
        ]);
        todoCounter.current = nextId;
    }

    const addToEnd = () => {
        const nextId = todoCounter.current + 1;
        setTodoList(prevList => [
            ...prevList,
            {
                id: nextId,
                item: "",
                createdAt: new Date(),
            }
        ]);
        todoCounter.current = nextId;
    }

    const sortByEarliest = () => {
        setTodoList(prevState => {
            let newList = [...prevState];
            newList.sort((a, b) => {
                return getTime(a.createdAt) - getTime(b.createdAt)
            })
            return newList
        });
    }

    const sortByLatest = () => {
        setTodoList(prevState => {
            let newList = [...prevState];
            newList.sort((a, b) => {
                return getTime(b.createdAt) - getTime(a.createdAt)
            })
            return newList
        });
    }

    const handleItemChange = (id: number, item: string) => {
        setTodoList(prevList => {
            let newList = prevList;
            newList.forEach((todo) => {
                if(todo.id === id) todo.item = item
            })
            return newList
        })
    }

    const handleDelete = (id: number) => {
        setTodoList(prevList => prevList.filter((todo) => todo.id !== id))
    }

    const todoListElement = todoList.map((todo, index) => (
        <Todo 
            key={todo.id} 
            index={index} 
            {...todo} 
            handleItemChange={handleItemChange}
            handleDelete={handleDelete}
        />
    ))

    return (
        <>
            <h1>Todo List</h1>
            <div className={styles.wrapper}>
                <div className={styles['button-wrapper']}>
                    <button onClick={addToStart}>
                        Add to start
                    </button>
                    <button onClick={addToEnd}>
                        Add to end
                    </button>
                    <button onClick={sortByEarliest}>
                        Sort by earliest
                    </button>
                    <button onClick={sortByLatest}>
                        Sort by latest
                    </button>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Item</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoListElement}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TodoList