import React from "react";
import "./App.css";
import Login from "../components/login";
import { BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./../components/dashboard";
import LoginPage from "./../components/login";
import HomePage from "./../components/homePage";
import { Container } from "@material-ui/core";

import PrivateRoute from "./../routing/privateRoute";
import PublicRoute from "./../routing/publicRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container maxWidth="sm">
          {/* <Login /> */}
          <Switch>
            <PublicRoute
              restricted={false}
              component={HomePage}
              path="/"
              exact
            />
            <PublicRoute
              restricted={true}
              component={LoginPage}
              path="/login"
              exact
            />
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
