import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// For more information, read
// https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

const Home = () => {
  return (
    <BrowserRouter>
      <h1>home Pages</h1>
      <Link to='/privacy-policy'>view</Link>

      <Switch>
        <Route path='/privacy-policy' component={() => {
          window.location.href = 'http://localhost:4000/login';
          return null;
        }} />
      </Switch>
    </BrowserRouter>
  );
};
export default Home;
