import React, { useState, useEffect, SetStateAction, Dispatch, useRef } from 'react'
import { ITodoItem } from '../types/todo'

type TodoProps = {
    index: number;
    id: number;
    item: string;
    createdAt: Date;
    handleItemChange: (id: number, item: string) => void;
    handleDelete: (id: number) => void;
}

const Todo = ({ index, id, item, createdAt, handleItemChange, handleDelete }: TodoProps) => {
    const [todoItem, setTodoItem] = useState(item);
    const [isEditModeOn, setEditMode] = useState(true);

    const onInputFocusChange = () => {
        if (todoItem !== "")
            setEditMode(false);
    }

    useEffect(() => {
        handleItemChange(id, todoItem)
    }, [handleItemChange, id,todoItem])
    

    return (
        <tr>
            <td><label>{index + 1}</label></td>
            <td>
                {isEditModeOn 
                    ? <input 
                        value={todoItem} 
                        onChange={(e) => setTodoItem(e.target.value)}
                        onBlur={onInputFocusChange}
                        style={{ minWidth: '200px' }} />
                    : <div style={{ minWidth: '200px', textAlign: 'left' }}>{todoItem}</div>
                }
            </td>
            <td><label>{createdAt.toLocaleTimeString()}</label></td>
            <td>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default Todo