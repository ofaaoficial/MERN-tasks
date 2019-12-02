import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import TasksList from './views/task/TasksList';
import TasksCreate from './views/task/TasksCreate';
import TasksEdit from './views/task/TasksEdit';
import UserList from "./views/user/UserList";

function App() {
  return (
      <Router>
          <Navigation/>
          <Route path="/" component={TasksList} exact/>
          <Route path="/edit/:id" component={TasksEdit}/>
          <Route path="/create" component={TasksCreate}/>
          <Route path="/users" component={UserList}/>
      </Router>
  );
}

export default App;
