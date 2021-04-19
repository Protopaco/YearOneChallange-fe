import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "../Header/Header"

export default function App() {
  return (
    <Router>
      <Switch>
        <Header />
        {/* <Route
          exact
          path="/"
          component={SearchPage} /> */}
      </Switch>
    </Router>
  )
}
