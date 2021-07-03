import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import PostViewer from './Pages/PostViewer';
import TopTracks from './Pages/TopTracks';
import Home from './Pages/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/view" component={PostViewer} />
          <Route path="/graphs/popular-top-tracks" component={TopTracks} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
