import React from 'react';
/* import logo from './logo.svg';
 */import './App.css';
import axios from 'axios';
import AuthorList from './components/Author';
import BooksList from './components/books';
import UserList from './components/users';
import ProjectList from './components/project_app';
import TodoList from './components/todo';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import NotFound404 from "./components/NotFound404";
import LoginForm from './components/Auth.js'
import Cookies from 'universal-cookie';
import Menu from './components/menu';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'authors': [],
      'users': [],
      'project': [],
      'todo': [],
      'books': [],
      'menu': [],
    }
  }

  set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({ 'token': token }, () => this.load_data())
  }
  
  is_authenticated() {
    // eslint-disable-next-line eqeqeq
    return this.state.token != ''
  }

  logout() {
    this.set_token('')
  }
  
  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({ 'token': token }, () => this.load_data())
  }
  
  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {
      username: username,
      password: password,
    }).then(response => {
      console.log(response.data)
      this.set_token(response.data['token'])
    }).catch(error => alert('Скидыщ!!! Неверный логин или пароль'))
  }
  
  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_authenticated()) {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }
  
  load_data() {
    const headers = this.get_headers()

    axios.get('http://127.0.0.1:8000/api/menu', { headers })
      .then(response => {
        const menu = response.data.results
        this.setState({
          'menu': menu
        }
        )
      }
      ).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/authors', { headers })
      .then(response => {
        const author = response.data.results
        this.setState({
          'authors': author
        }
        )
      }
      ).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/todo')
      .then(response => {
        const todo = response.data.results
        this.setState({
          'todo': todo,
        }
        )
      }
      ).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/users', { headers })
      .then(response => {
        const users = response.data['results']
        this.setState({
          'users': users,
        }
        )
      }
      ).catch(error => console.log(error))
    this.setState({ users: [] })
    axios.get('http://127.0.0.1:8000/api/project')
      .then(response => {
        const project = response.data['results']
        this.setState({
          'project': project,
        }
        )
      }).catch(error => console.log(error))
    console.log('Это this' + this);
    axios.get('http://127.0.0.1:8000/api/books')
      .then(response => {
        const book = response.data['results']
        this.setState(
          {
            'books': book,
          }
        )
      }).catch(error => console.log(error))
  }


  componentDidMount() {
    this.get_token_from_storage()
    // this.load_data()
  }

  render() {

    return (

      <div className="App">
        <Menu menu={this.state.menu}/>
        <BrowserRouter>
          <Menu menu={this.state.menu}/>
        
          <nav>
            <ul>
              <li>
                <Link to='/users'>Пользователи</Link>
              </li>
              <li>
                <Link to='/authors'>Авторы</Link>
              </li>
              <li>
                <Link to='/project'>Проект</Link>
              </li>
              <li>
                <Link to='/todo'>Заметки</Link>
              </li>
              <li>
                <Link to='/books'>Книги</Link>
              </li>
              <li>
                <Link to='/menu'>Меню</Link>
              </li>
              <li>
                {this.is_authenticated() ? <button onClick={() => this.logout()}>Вход</button>
                  : <Link to='/login'>Login</Link>}
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Menu menu={this.state.menu} />}></Route>
            <Route path='/authors' element={<AuthorList author={this.state.authors} />}></Route>
            <Route path='todo' element={<TodoList todo={this.state.todo} />}></Route>
            <Route path='users' element={<UserList users={this.state.users} />}></Route>
            <Route path='project' element={<ProjectList project={this.state.project} />}>
            </Route>
             <Route path='/books' element={<BooksList book={this.state.books} />} />
            <Route path='login' element={
              this.is_authenticated()
                ? <Link to='/'></Link>

                : <LoginForm
                  get_token={(username, password) => this.get_token(username, password)} />}>
            </Route>
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
