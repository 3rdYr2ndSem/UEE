import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import 'react-notifications/lib/notifications.css';

import Header from './raw/header'
import Footer from './raw/footer'
import Pagenotfound from './raw/pageNotFound'
// import Adver from './raw/Ad'

import Downloads from './views/FAZLAN/indexDownloads'
import Forum from './views/ASHANSA/indexForum'
import Home from './views/NETHU/indexHome'
import Subtitles from './views/NIPUNA/indexSubtitles'
import Faq from './views/NIPUNI/indexFAQ'


export default class App extends Component {

  render() {
    return (
      <div>       
        <Router>
          <div>
          <Header />
          <Switch>
              <Route path="/Home" exact static component = {Home} />
              <Route path="/Downloads" exact static component = {Downloads} />
              <Route path="/Subtitles" exact static component = {Subtitles} />
              <Route path="/Forum" exact static component = {Forum} />
              <Route path="/Faq" exact static component = {Faq} />
              <Route path="**" exact static component = {Pagenotfound} />
          </Switch>
          <Footer />
        </div>
        </Router>
      </div>
    );
  }
}

