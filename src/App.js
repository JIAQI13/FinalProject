import React, { Component } from 'react';

import PostViewer from './PostViewer';
import TopTracks from './TopTracks';

class App extends Component {
  render() {
    return (
      <main>
        <PostViewer />
        <TopTracks />
      </main>
    );
  }
}

export default App;
