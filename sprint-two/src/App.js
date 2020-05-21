import React, { Component } from "react";
import "./styles/main.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heading from "./components/Heading";

import Upload from "./components/pages/upload";

class App extends Component {
  render() {
    return (
      <Router>
        <Heading />
        <Switch>
          <Route path="/" component={Home} exact />
          {/* // <Route
          //   path="/"
          //   render={(routerProps) => (
          //     <Home
          //       mainVideo={this.props.mainVideo}
          //       sideBar={this.props.sideBar}
          //       {...routerProps}
          //     />
          //   )}
          //   exact
          // /> */}
          {/* <Route
            path="/video/:id"
            render={(routerProps) => (
              <Home
                mainVideo={this.state.mainVideo}
                sideBar={this.state.sideBar}
                {...routerProps}
              />
            )}
          /> */}
          <Route path="/upload" component={Upload} />
        </Switch>
      </Router>
    );
  }
}
export default App;
