import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./coomponents/contacts/Contacts";
import AddContact from "./coomponents/contacts/AddContact";
import EditContact from "./coomponents/contacts/EditContact";
import Header from "./coomponents/layout/Header";
import About from "./coomponents/pages/About";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./coomponents/pages/NotFound";
import Test from "./coomponents/test/Test";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
