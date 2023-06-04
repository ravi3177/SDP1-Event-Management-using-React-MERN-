import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Events from './components/Events'
import About from './components/About'
import Clients from './components/Clients'
import Menu from './components/Menu'
import Login from './components/login/Login';
import Register from './components/login/Register';
import Home from './components/Home/Home';
import Add from './components/add/Add';
import Auth from "./Authentication/Auth";

function App() {
  return (
    <div >


      <BrowserRouter>
        <Switch>

          <Route path="/login" exact>
            <Navbar />
            <Login />
          </Route>
          <Route path="/register" exact>
            <Navbar />
            <Register />
          </Route>
          <Route path="/home" exact>
            <Navbar />
            <Home />
           <About />
           <Menu />
           <Events/>
          <Clients />
          </Route>
          <Route
            path="/logout"
            render={() => {
              Auth.logout();
              return (
                <div>
                   <Navbar />
                  <Home />
                </div>
              );
            }}
          />
          <Route path="/add" component={Add} exact >
          <Navbar />
                  <Add />
          </Route>
          <Route path="*">
              <Navbar />
              <Home />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
