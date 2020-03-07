import React from 'react';
import ActivityList from './ActivityList';
import SingleActivity from './SingleActivity';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";


// function App() {
  class App extends React.Component {
    constructor() {
      super();
    }



    render() {
      return (
        <Router>
          <Route exact path="/" render={props => <ActivityList {...props} />} />
          <Route
            path="/singleActivity"
            render={props => <SingleActivity {...props} />}
          />
        </Router>
      );
    }
  }

export default App;
