import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './img/logo.png';
import './App.css';
import './dist/webapp.min.css';
import Header from './Header'
import Home from './Home';
import About from './About';
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
           <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
