import React, { Component } from 'react';
import moment from 'moment';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from './pages/about';
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail.js";
import NoMatch from "./pages/no-match.js";

export default class App extends Component {
  constructor(){
    super();

    this.getPortfolioItems=this.getPortfolioItems.bind(this);
  }
  getPortfolioItems() {
    axios
      .get("https://catalobo.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        console.log("response data", response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>
        <Router>
          <div>
        <h1>Mi Portfolio</h1>
        <h2>Cata Lobo</h2>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </Router>

      </div>
      
    );
  }
}
