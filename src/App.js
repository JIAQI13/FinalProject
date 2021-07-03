import React, { Component } from 'react';

import PostViewer from './PostViewer';
import TopTracks from './TopTracks';

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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
