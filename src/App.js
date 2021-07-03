import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import PostViewer from './PostViewer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <PostViewer />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
