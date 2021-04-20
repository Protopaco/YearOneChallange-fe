import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import SearchResults from "../SearchResults/SearchResults";
import { ThemeProvider } from '@material-ui/core'
import { theme } from "../../utils/colorTheme"


export default function App() {

  return (
    <ThemeProvider
      theme={theme}>
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
    </ThemeProvider>
  )
}
