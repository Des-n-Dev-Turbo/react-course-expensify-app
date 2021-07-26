import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddPage from "../components/AddPage";
import EditPage from "../components/EditPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NoMatch from "../components/NoMatch";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ExpenseDashboardPage />
        </Route>
        <Route path="/create">
          <AddPage />
        </Route>
        <Route path="/edit/:id" exact>
            <EditPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
