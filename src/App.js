import React, { Component } from 'react';
<<<<<<< HEAD

import PostViewer from './PostViewer';
import TopTracks from './TopTracks';
=======
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import PostViewer from './Pages/PostViewer';
import Home from './Pages/Home'
>>>>>>> master

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <main>
        <PostViewer />
        <TopTracks />
      </main>
=======
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/view" component={PostViewer} />
        </Switch>
      </BrowserRouter>
>>>>>>> master
    );
  }
}

export default App;
