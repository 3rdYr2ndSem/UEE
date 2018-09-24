import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Header from './raw/header'
import Footer from './raw/footer'
import Pagenotfound from './raw/pageNotFound'
// import Adver from './raw/Ad'

import Downloads from './views/FAZLAN/indexDownloads'
import Forum from './views/ASHANSA/indexForum'
import Home from './views/NETHU/indexHome'
import Subtitles from './views/NIPUNA/subtitlesMainPage'
import Faq from './views/NIPUNI/indexFAQ'


import SubtitleTVseries from './views/FAZLAN/SubtitlesTvSeries' 
import MainDownload from './views/FAZLAN/mainDownload'

import moviePage from './views/NIPUNA/moviePage'


export default class App extends Component {

  render() {
    return (
      <div>       
        <Router>
          <div >
          <Header />
              <div style={{ margin: "0 auto",
                  width:"90%",
                  clear: "both"}}>
                  <Switch>
                      <Route path="/Home" exact static component = {Home} />
                      <Route path="/Downloads" exact static component = {Downloads} />
                      <Route path="/Subtitles" exact static component = {Subtitles} />
                      <Route path="/Forum" exact static component = {Forum} />
                      <Route path="/Faq" exact static component = {Faq} />
                      <Route path="/SubtitleTVseries" exact static component = {SubtitleTVseries} />
                      <Route path="/MainDownload" exact static component = {MainDownload} />
                      <Route path="/AudioOriginal" exact static component = {Faq} />
                      <Route path="/AudioRemix" exact static component = {Faq} />
                      <Route path="/MoviePage" exact static component = {moviePage} />
                      <Route path="**" exact static component = {Pagenotfound} />
                      
                  </Switch>
                  </div>
          <Footer />
        </div>
        </Router>
      </div>
    );
  }
}

