import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Header />
        <Route
          exact
          path="/"
          component={SearchPage} />
      </Switch>
    </Router>
  )
}
