import React, { Component } from "react";
import Home from './Home';
import About from './About';
import Contact from './Contact'

import {
    BrowserRouter,
    Route,
    Link,
    HashRouter,
    Switch
} from 'react-router-dom'



class Route extends Component{
  render(){
    return(

        <HashRouter>
                <Switch>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Layout>
                </Switch>
        </HashRouter>


    );
  }
}


export default Route;
