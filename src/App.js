import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Header from "./components/Header";
import PostViewer from "./Pages/PostViewer";
import TopArtistsPopularity from "./Pages/TopArtistsPopularity";
import TopArtistsFollowers from "./Pages/TopArtistsFollowers";
import TopArtistsGenres from "./Pages/TopArtistsGenres";
import RelatedArtists from './Pages/RelatedArtists';
import TopTracksPopularity from './Pages/TopTracksPopularity';
import TopTracksAnalysis from "./Pages/TopTracksAnalysis";
import TopTracksYears from "./Pages/TopTracksYears";
import Home from './Pages/Home'
import './styles.css'

const routes = [
  { path: '/', name: 'Visic', Component: Home },
  { path: '/view', name: 'view', Component: PostViewer },
  { path: "/graphs/top-artists/popularity", name: 'top-artists by popularity', Component: TopArtistsPopularity },
  { path: "/graphs/top-artists/followers", name: 'top-artists by followers', Component: TopArtistsFollowers },
  { path: "/graphs/top-tracks/popularity", name: 'top-tracks by popularity', Component: TopTracksPopularity },
  { path: "/graphs/top-artists/genres", name: 'top-artists by genres', Component: TopArtistsGenres },
  // { path: "/graphs/top-artists/:id/related-artists", name: 'related artist', Component: RelatedArtists },
  { path: "/graphs/top-tracks/years", name: 'top-tracks by year', Component: TopTracksYears },
  { path: "/graphs/top-tracks-analysis", name: 'top-tracks analysis', Component: TopTracksAnalysis }
]

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div>
      //     <Header />
      //   </div>
      //   <Switch>
      //     <Route path="/" component={Home} exact />
      //     <Route path="/view" component={PostViewer} />
      //     <Route path="/graphs/top-artists/popularity" component={TopArtistsPopularity} exact />
      //     <Route path="/graphs/top-artists/followers" component={TopArtistsFollowers} exact />
      //     <Route path="/graphs/top-tracks/popularity" component={TopTracksPopularity} exact />
      //     <Route path="/graphs/top-artists/genres" component={TopArtistsGenres} exact />
      //     <Route path="/graphs/top-artists/:id/related-artists" component={RelatedArtists} exact />
      //     <Route path="/graphs/top-tracks/years" component={TopTracksYears} exact />
      //     <Route path="/graphs/top-tracks-analysis" component={TopTracksAnalysis} exact />
      //   </Switch>
      // </BrowserRouter>
      <Router>
        <>
          <Navbar bg="light">
            <Nav className="mx-auto">
              {routes.map(route => (
                <Nav.Link
                  key={route.path}
                  as={NavLink}
                  to={route.path}
                  activeClassName="active"
                  exact
                >
                  {route.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar>
          <Container className="container">
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Container>
        </>
      </Router>
    );
  }
}

export default App;
