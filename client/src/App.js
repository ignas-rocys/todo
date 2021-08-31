import React from "react";
import { Dashboard } from "./pages/Dashboard";
import {NewTodoForm} from './pages/NewTodoForm';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          background: "#f6f6f6",
          width: "100%",
          maxWidth: "475px",
        }}
      ></div>
      <Switch>
        <Route path={"/dashboard"}>
          <Dashboard />
        </Route>
        <Route path={'/making_a_new_todo'}>
          <NewTodoForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
