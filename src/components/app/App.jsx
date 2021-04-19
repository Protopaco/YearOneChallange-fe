import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import SearchResults from "../SearchResults/SearchResults";


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={LandingPage} />
        <Route
          exact
          path="/search/:searchText"
          component={SearchResults} />
      </Switch>
    </Router>
  )
}
