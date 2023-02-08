import * as React from "react";
/* import { Link } from "react-router-dom";
import AuthorList from "./Author";
import BooksList from "./books";
import ProjectList from "./project_app";
import TodoList from "./todo";

const MenuItem = ({menu, BooksList, ProjectList, TodoList}) => {
    return (
        <tr>
            <td>
          <Link to={`/Author/${AuthorList}`}>{AuthorList}</Link>
            </td>
            <td>
                <Link to={`/books/${BooksList}`}>{BooksList}</Link>
            </td><td>   
                <Link to={`/project_app/${ProjectList}`}>{ProjectList}</Link>
            </td><td>
                <Link to={`/todo/${TodoList}`}>{TodoList}</Link>
                {menu.author}
            </td>
            <td>
                {menu.book}
            </td>
            <td>
                {menu.project}
            </td>
            <td>
                {menu.user}
            </td>
            <td>
                {menu.todo}
            </td>
        </tr>
    )
}

const MenuList = (menu) => {
    return (
        <table>
            <thead>
                <th>
                |Имя автора
                </th>
               <th>
                    | Название книги
                </th>
                <th>
                    | Проект
                </th>
                <th>
                    | Пользователи
                </th>
                <th>
                    | Заметки|
                </th>
                    {menu.map((menu) => <MenuItem menu={menu} />)}
            </thead>
            
        </table>
    )
}

export default MenuList
 */


const Menu_el = ({menu_el}) => {
    return (
        <li>
            {menu_el.name}
        </li>
    )
}

const Menu = ({menu}) => {
    return (
        <ul className={'my_menu'}>
            {menu.map((menu_el) => <Menu_el menu_el={menu_el}/>)}
        </ul>
    )
}

export default Menu