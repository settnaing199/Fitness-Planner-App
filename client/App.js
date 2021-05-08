import React, { Component } from 'react';
import { BrowserRouter as Router , Switch, Route, Link,
  NavLink} from 'react-router-dom';
import DailyWorkout from './pages/dailyworkout';
import History from './pages/history';
import Login from './pages/login';
import SignOut from './pages/logout';
// import './stylesheets/styles.css';
function Navigation(props) {
  return (
    <nav className="navbar">
      {/* <Link className="navbar-brand" to="/">Sets & Reps</Link> */}
      <ul>
      <li>
          <NavLink exact to="/signout">
            Sign Out
          </NavLink>
        </li>
      <li>
          <NavLink exact to="/history">
            History
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/">
            Daily Workout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

const App = props => {

  return (
    <div>
  
      <Router>
      <Navigation />
        <Switch>
          <Route path="/" exact component={DailyWorkout} />
          <Route path="/history" exact component={History}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signout" exact component={SignOut}/>

        </Switch>
        </Router>
    </div>
  );
};

export default App;