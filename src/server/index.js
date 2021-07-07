const express = require('express');
const request = require('request');
const morgan = require('morgan')
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
require('dotenv').config();

var variable1;
//graphql
const POSTS = [
  { author: "John Doe", body: "Hello world" },
  { author: "Jane Doe", body: "Hi, planet!" },
];

const schema = buildASTSchema(gql`
  type Query {
    posts: [Post]
    post(id: ID!): Post
    hello: String
    topArtists: [Artists]
    topTracks: [Tracks]
    top10Tracks: [Tracks]
    relatedArtists(id:String): [Artists]
    audioFeatures(ids:String): [AudioFeatures]
    tracksAnalysis: [AudioFeatures]
    topTracksInfo(ids:String): [Tracks]
  }

  type Post {
    id: ID
    author: String
    body: String
  }

type Images { height: Int url: String width: Int }
type Followers { href: String total: Int }
type ExternalUrls { spotify: String }
type ExternalIds { isrc: String }

type Artists {
  href: String
  id: String
  name: String
  popularity: Int
  type: String
  uri: String
  images: [Images ]
  genres: [String ]
  followers: Followers
  external_urls: ExternalUrls }

type Album {
  album_type: String
  href: String
  id: String
  name: String
  release_date: String
  release_date_precision: String
  total_tracks: Int
  type: String
  uri: String
  images: [Images]
  external_urls: ExternalUrls
  artists: [Artists]
}

type Tracks {
  disc_number: Int
  duration_ms: Int
  explicit: Boolean
  href: String
  id: String
  is_local: Boolean
  name: String
  popularity: Int
  preview_url: String
  track_number: Int
  type: String
  uri: String
  external_urls: ExternalUrls
  external_ids: ExternalIds
  available_markets: [String ]
  artists: [Artists ]
  album: Album }

  type AudioFeatures {
    danceability: Float
    energy: Float
    key: Int
    loudness: Float
    mode: Int
    speechiness: Float
    acousticness: Float
    instrumentalness: Float
    liveness: Float
    valence: Float
    tempo: Float
    type: String
    id: String
    uri: String
    track_href: String
    analysis_url: String
    duration_ms: Int
    time_signature: Int }
`);

const mapPost = (post, id) => post && { id, ...post };

const root = {
  posts: () => POSTS.map(mapPost),
  post: ({ id }) => mapPost(POSTS[id], id),
  hello: () => 'Hello world!',
  topArtists: async () => {
    const value = await new Promise(resolve => {
      request({
        url: "https://api.spotify.com/v1/me/top/artists?time_range=long_term",
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + variable1
        },
        json: true
      }, function (error, response, body) {
        if (!error)
          resolve(body);
      });
    });
    return value.items;
  },
  topTracks: async () => {
    const value = await new Promise(resolve => {
      request({
        url: "https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + variable1
        },
        json: true
      }, function (error, response, body) {
        if (!error)
          resolve(body);
      });
    });
    return value.items;
  },
  relatedArtists: async (args) => {
    const value = await new Promise(resolve => {
      console.log('***************', args.id);
      request({
        url: `https://api.spotify.com/v1/artists/${args.id}/related-artists`,
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + variable1
        },
        json: true
      }, function (error, response, body) {
        if (!error)
          resolve(body);
      });
    });
    // process value here
    return value.artists;
  },
  audioFeatures: async (args) => {
    const value = await new Promise(resolve => {
      console.log('***************', args.id);
      request({
        url: `https://api.spotify.com/v1/audio-features?ids=${args.ids}`,
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + variable1
        },
        json: true
      }, function (error, response, body) {
        if (!error)
          resolve(body);
      });
    });
    // process value here
    return value.audio_features;
  },
  top10Tracks: async () => {
    const value = await new Promise((resolve) => {
      console.log("***************", variable1);
      request(
        {
          url: "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10&offset=5",
          method: "GET",
          headers: {
            Authorization: "Bearer " + variable1,
          },
          json: true,
        },
        function (error, response, body) {
          if (!error) resolve(body);
        }
      );
    });
      // process value here
      return value.items;
  },
  tracksAnalysis: () => {
    return new Promise((resolve) => {
      console.log("***************", variable1);
      request(
        {
          url: "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10",
          method: "GET",
          headers: {
            Authorization: "Bearer " + variable1,
          },
          json: true,
        },
        function (error, response, body) {
          if (!error) resolve(body);
        }
      );
    })
      .then((value) => {
        // process value here
        let ids = "";
        value.items.forEach((item) => {
          ids = ids + item.id + ",";
        });
        ids = ids.slice(0, ids.length - 1);
        return new Promise((resolve) => {
          console.log("***************", variable1);
          request(
            {
              url: `https://api.spotify.com/v1/audio-features?ids=${ids}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + variable1,
              },
              json: true,
            },
            function (error, response, body) {
              if (!error) resolve(body);
            }
          );
        });
      })
      .then((value) => {
        // process value here
        // console.log("-------------------->",value)
        return value.audio_features;
      });
  },
  topTracksInfo: async () => {
    return new Promise(resolve => {
      request({
        url: "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50",
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + variable1
        },
        json: true
      }, function (error, response, body) {
        if (!error)
          resolve(body);
      });
    })
    .then ((value) => {
      let allIds = ""
      for (let i = 0; i < value.items.length; i++) {
        allIds += `${value.items[i].id}`

        // Add commas except final value
        if (i !== value.items.length - 1) {
          allIds += "%2C"
        }
      }
      return new Promise((resolve) => {
        console.log("***************", variable1);
        request(
          {
            url: `https://api.spotify.com/v1/tracks?ids=${allIds}&market=US`,
            method: "GET",
            headers: {
              Authorization: "Bearer " + variable1,
            },
            json: true,
          },
          function (error, response, body) {
            if (!error) resolve(body);
          }
        );
      });
    })
    .then((value) => {
      // process value here
      return value.tracks;
    });
  }
};

//spotify login prepare
const client_id = "cfa601e4abca4a2f87f33698a4b4d293"; // Your client id
const client_secret = "a17ceaf1443a4003a2d42458d6e7d8e7"; // Your secret
const redirect_uri = "http://localhost:4000/callback"; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function (length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = "spotify_auth_state";

const app = express();
app.use(cors()).use(morgan()).use(cookieParser());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

//spotify routes
app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope =
    "user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/callback", function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        // we can also pass the token to the browser to make requests from there
        variable1 = body.access_token;
        res.redirect("http://localhost:3000/view");
      } else {
        res.redirect(
          "http://localhost:3000/view" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    });
  }
});

app.get("/refresh_token", function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    }
  });
});

const port = process.env.SERVER_PORT || 4000;
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
