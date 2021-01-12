import React from "react";
import "./App.css";

import { Provider } from "react-redux";

import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import MainComponent from "./components/MainComponent";
import UsersComponent from "./components/UsersComponent";
import { configureStore } from "./redux/configureStore";
import UserProfile from "./components/UserProfile";
import PostDescription from "./components/PostDescription";

const store = configureStore();



function App() {
  return (
    
    <Provider store={store}>
      <h2>React Redux Demo Application</h2>
      <BrowserRouter>
        <div>
        <nav>
          <ul>

            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Switch>
          <Route path="/posts" component={MainComponent} />
          <Route path="/posts/:id" component={PostDescription} />
          <Route path="/users" exact component={UsersComponent} />
          <Route path="/users/:id" render={(props) => <UserProfile {...props} />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
