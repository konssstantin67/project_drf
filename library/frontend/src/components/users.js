import React from 'react'


const UserItem = ({ user }) => {
    return (
        <tr>
            <td>
                {user.id}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.birthday_date}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <th>
               | id Пользователя
            </th>
            <th>
               | Имя Пользователя
            </th>
            <th>
               | Фамилия Пользователя
            </th>
            <th>
               | ДР Пользователя
            </th>
            <th>
               | email Пользователя |
            </th>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}

export default UserList