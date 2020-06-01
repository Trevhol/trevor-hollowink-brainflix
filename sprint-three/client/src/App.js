import React, { Component } from "react";
import "./styles/main.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heading from "./components/Heading";
import Upload from "./pages/Upload";

class App extends Component {
  render() {
    return (
      <Router>
        <Heading />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/nextvideo/:id" component={Home} />
          <Route path="/Upload" component={Upload} />
        </Switch>
      </Router>
    );
  }
}
export default App;
