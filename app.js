var SpotifyWebApi = require('spotify-web-api-node');
var request = require('request'); 
const client_id = 'b1dd47b15c6443f3ac8af7dcd8947d93'
const client_secret = '09f80ef7a0c442729726750eff49358a'

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: 'b1dd47b15c6443f3ac8af7dcd8947d93',
  clientSecret: '09f80ef7a0c442729726750eff49358a',
  redirectUri: 'http://localhost:8888/'
});

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
  
      // use the access token to access the Spotify Web API
      const token = body.access_token;
      spotifyApi.setAccessToken(token)
      console.log(token)
      
      var options = {
        url: 'https://api.spotify.com/v1/playlists/43g8bxyNU87JUbQF7efj4E/followers/contains',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        qs : {
            ids: 'sculs13'
          },
        json: true
      };

      request.get(options, function(error, response, body) {
        console.log(body);
      });


//     spotifyApi.areFollowingPlaylist('c_carpenter801','43g8bxyNU87JUbQF7efj4E', ['sculs13'])
//  .then(function(data) {
//     data.body.forEach(function(isFollowing) {
//       console.log("User is following: " + isFollowing);
//     });
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });
    }
  });




