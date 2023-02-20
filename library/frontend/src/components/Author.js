import * as React from "react";
import { Link } from "react-router-dom";


const AuthorItem = ({author}) => {
    return (
        <tr>
            <td>
                {author.id}
            </td>
            <td>
                <Link to={`/authors/${author.id}`}>{author.first_name}</Link>
            </td>
            <td>
                {author.last_name}
            </td>
            <td>
                {author.birthday_year}
            </td>
        </tr>
    )
}

const AuthorList = ({ author }) => {
    return (
        <table>
            <thead>
                <th>
               | id автора
                </th>
                <th>
                | Имя автора
                </th>
                <th>
                | Фамилимя автора
                </th>
                <th>
                | год рождения автора |
                </th>
                    {author.map((author) => (<AuthorItem author={author} />))}
            </thead>
            
        </table>
    )
}

export default AuthorList
