import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import TasksList from './views/task/TasksList';
import TasksCreate from './views/task/TasksCreate';
import TasksEdit from './views/task/TasksEdit';

function App() {
  return (
      <Router>
          <Navigation/>
          <Route path="/" component={TasksList} exact/>
          <Route path="/edit/:id" component={TasksEdit}/>
          <Route path="/create" component={TasksCreate}/>
      </Router>
  );
}

export default App;
