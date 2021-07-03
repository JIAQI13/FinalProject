import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import PostViewer from './Pages/PostViewer';
import TopArtistsPopularity from './Pages/TopArtistsPopularity';
import TopArtistsFollowers from './Pages/TopArtistsFollowers';
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
          <Route path="/graphs/top-artists/popularity" component={TopArtistsPopularity} exact />
          <Route path="/graphs/top-artists/followers" component={TopArtistsFollowers} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
