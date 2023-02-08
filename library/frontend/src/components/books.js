import React from 'react'


const BooksItem = ({book}) => {
    return (
        <tr>
            <td>
                {book.name}
            </td>
            <td>
                {book.author}
            </td>
        </tr>
    )
}

const BooksList = ({ book }) => {
    console.log(book)
    return (
        <table>
            <thead>
                <th>
                | Название книги
                </th>
                <th>
                | Имя Автора
                </th>
                {book.map((book) => <BooksItem book={book} />)}
            </thead>
        </table>
    )
}

export default BooksList