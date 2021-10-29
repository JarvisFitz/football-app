import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './Pages/home';
import Error from './Pages/error';
import NavBar from './Pages/navbar';
import FootballTable from './Pages/table'
import LoginPage from './Pages/login';


const ReactRouter = () => {
  return (<Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/PremierLeague">
        <FootballTable />
      </Route>
      <Route exact path="/Login">
        <LoginPage />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>);
}

export default ReactRouter;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
