import React from 'react'


const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.users}
            </td>
            <td>
                {todo.update_date}
            </td>
            <td>
                {todo.is_active}
            </td>
        </tr>
    )
}

const TodoList = ({ todo }) => {
    console.log(todo)
    return (
        <table>
            <thead>
                <th>
                | Текст заметки
                </th>
                <th>
                | Проект заметки
                </th>
                <th>
                | Пользователи заметки
                </th>
                <th>
                | Дата обновления заметки
                </th>
                <th>
                | Активность заметки |
                </th>
                {todo.map((todo) => <TodoItem todo={todo} />)}
            </thead>
            
        </table>
    )
}

export default TodoList