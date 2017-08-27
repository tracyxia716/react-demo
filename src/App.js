import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import TodoListContainer from './container/TodoListContainer'



const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)


const TodoList = () => (
  <TodoListContainer />
)

class App extends Component {
  render() {
    return (
     <Router>
       <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/todoList">TodoList</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todoList" component={TodoList} />
       </div>
       
     </Router>

    );
  }
}

export default App;
