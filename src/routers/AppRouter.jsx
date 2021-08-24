import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { createBrowserHistory } from 'history';


import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddPage from "../components/AddPage";
import EditPage from "../components/EditPage";
import NoMatch from "../components/NoMatch";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" exact component={LoginPage} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddPage} />
        <PrivateRoute path="/edit/:id" exact component={EditPage} />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
