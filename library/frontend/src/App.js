import React from 'react';
/* import logo from './logo.svg';
 */import './App.css';
import axios from 'axios';
import AuthorList from './components/Author';
import AuthorItem from './components/Author';
import UserList from './components/users';
import ProjectList from './components/project_app';
import ProjectItem from "./components/project_app";
import TodoList from './components/todo';
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import NotFound404 from "./components/NotFound404";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'authors': [],
      'users': [],
      'project': [],
      'todo': [],
      'books':[],
    }
  }
  componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/todo/')
      .then(response => {
        const todo = response.data.results
        this.setState(
          {
            'todo': todo,
          }
        )
      }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/project/')
      .then(response => {
        const project = response.data.results
        this.setState(
          {
            'project': project,
          }
        )
      }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        const users = response.data.results
          this.setState(
          {
          'users': users,
          }
        )
      }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/authors')
      .then(response => {
        const author = response.data.results
        this.setState(
          {
            'authors': author,
          }
        )
      }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/books')
      .then(response => {
        const book = response.data.results
        this.setState(
          {
            'books': book,
          }
        )
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <li>
              <Link to='/users'>Пользователи</Link>
            </li>
            <li>
              <Link to='/authors'>Авторы</Link>
            </li>
            <li>
              <Link to='/project'>Project_ap</Link>
            </li>
            <li>
              <Link to='/todo'>Заметки</Link>
            </li>
             <li>
              <Link to='/books'>Книги</Link>
            </li>
          </nav>

          <Routes>
            <Route exact path='/' element={<Navigate  to='/project' />} />
            <Route path='/project'>
                <Route index element={<ProjectList project={this.state.project}/>}/>
                <Route path=':projectname' element={<ProjectItem project={this.state.project}/>}/>
            </Route>
              {<Route exact path='/users' element={<UserList users={this.state.users}/>}/>} 
              <Route index element={<AuthorList author={this.state.authors}/>}/>
            <Route path='/author' element={<AuthorItem author={this.state.authors} />} />
            <Route exact path='/todo' element={<TodoList todo={this.state.todo}/>}/>
            <Route path='*' element={<NotFound404 />} />
            <Route exact path='/books' element={<booksList book={this.state.book}/>}/>
          </Routes>
        </BrowserRouter>
       </div>
    )
  }
}

export default App;
