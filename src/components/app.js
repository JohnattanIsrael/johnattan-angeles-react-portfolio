import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationContainer from "./navigation/navigation-container";
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import AddBlog from './pages/add-blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from './pages/no-match';
import Auth from './pages/auth';

export default class App extends Component {
  render() {
    return (
      <div className='container'>

        <Router>
          <div>
              <NavigationContainer />

              <Switch>
                <Route exact path='/' component = {Home}/>
                <Route exact path='/auth' component = {Auth} />
                <Route path='/about-me' component = {About}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/add-blog' component={AddBlog}/>
                <Route exact path='/portfolio/:slug' component={PortfolioDetail}/>
                <Route component={NoMatch}/>

              </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
