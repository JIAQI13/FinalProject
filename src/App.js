import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import PostViewer from "./Pages/PostViewer";
import TopArtistsPopularity from "./Pages/TopArtistsPopularity";
import TopArtistsFollowers from "./Pages/TopArtistsFollowers";
import TopTracksPopularity from './Pages/TopTracksPopularity';
import TopTracksAnalysis from "./Pages/TopTracksAnalysis";
import RelatedArtists from './Pages/RelatedArtists';
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
          <Route path="/graphs/top-tracks/popularity" component={TopTracksPopularity} exact />
          <Route path="/graphs/top-artists/:id/related-artists" component={RelatedArtists} exact />
          <Route
            path="/graphs/top-tracks-analysis"
            component={TopTracksAnalysis}
            exact
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
