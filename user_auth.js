var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var SpotifyWebApi = require('spotify-web-api-node');


var client_id = 'b1dd47b15c6443f3ac8af7dcd8947d93'; // Your client id
var client_secret = '09f80ef7a0c442729726750eff49358a'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

var spotifyApi = new SpotifyWebApi({
    clientId: 'b1dd47b15c6443f3ac8af7dcd8947d93',
    clientSecret: '09f80ef7a0c442729726750eff49358a',
    redirectUri: 'http://localhost:8888/callback'
  });
  let last = 'test'
/**
* Generates a random string containing numbers and letters
* @param  {number} length The length of the string
* @return {string} The generated string
*/
var generateRandomString = function(length) {
 var text = '';
 var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

 for (var i = 0; i < length; i++) {
   text += possible.charAt(Math.floor(Math.random() * possible.length));
 }
 return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
  .use(cors())
  .use(cookieParser());



app.get('/login', function(req, res) {

 var state = generateRandomString(16);
 res.cookie(stateKey, state);

 // your application requests authorization
 var scope = 'user-read-private user-read-email user-follow-read';
 res.redirect('https://accounts.spotify.com/authorize?' +
   querystring.stringify({
     response_type: 'code',
     client_id: client_id,
     scope: scope,
     redirect_uri: redirect_uri,
     state: state
   }));
});


app.get('/callback', function(req, res) {

 // your application requests refresh and access tokens
 // after checking the state parameter
 
 var code = req.query.code || null;
 var state = req.query.state || null;
 var storedState = req.cookies ? req.cookies[stateKey] : null;

 if (state === null || state !== storedState) {
   res.redirect('/#' +
     querystring.stringify({
       error: 'state_mismatch'
     }));
 } else {
   res.clearCookie(stateKey);
   var authOptions = {
     url: 'https://accounts.spotify.com/api/token',
     form: {
       code: code,
       redirect_uri: redirect_uri,
       grant_type: 'authorization_code'
     },
     headers: {
       'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
     },

     json: true
   };



   request.post(authOptions, function(error, response, body) {
     if (!error && response.statusCode === 200) {
       var access_token = body.access_token,
           refresh_token = body.refresh_token;
       var options = {
         url: 'https://api.spotify.com/v1/me',
         headers: { 'Authorization': 'Bearer ' + access_token },
         json: true
       };
       var optionsTwo = {
        url: 'https://api.spotify.com/v1/me/following?type=artist&limit=50',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
      };


       // use the access token to access the Spotify Web API
       request.get(options, function(error, response, body) {
        //  console.log(body);
       });
//        var offset = 0

        
//         const ids = []
//         let length = 400
        
//         while(length > 0 ) {
//             console.log(last)
//            request.get({
//             url: `https://api.spotify.com/v1/me/following?type=artist&limit=10${last}`,
//             headers: { 'Authorization': 'Bearer ' + access_token },
//             json: true
//           }, function(error, response, body) {
//             // body.artists.items.forEach((artist) => console.log(artist.id))
//                if(body.artists) {
//                     last = `&after=${body.artists.items[body.artists.items.length-1].id}`
//                     body.artists.items.forEach((artist) => ids.push(artist.id))
//                     app.get('/data', (req, res, next) => {
//                         try {
//                             res.send(ids)

//                         } catch(err) {
//                             console.log(err)
//                         }

                        
//                     })
//                     // console.log(body.artists.items[body.artists.items.length-1])
// }           
        
//         })
            
            
//             length-=50
//             offset+=50
//         }
        //    body.artists.items.forEach((artist) => console.log(artist.name, artist.uri.split(':')[2]))
           
        

      app.get('/access', (req, res) => {
        try {
            res.send(access_token)
        } catch(err) {
            console.log(err)
        }
    })


       // we can also pass the token to the browser to make requests from there
       res.redirect('/#' +
         querystring.stringify({
           access_token: access_token,
           refresh_token: refresh_token
         }));
     } else {
       res.redirect('/#' +
         querystring.stringify({
           error: 'invalid_token'
         }));
     }
   });
 }
});

app.get('/refresh_token', function(req, res) {

 // requesting access token from refresh token
 var refresh_token = req.query.refresh_token;
 var authOptions = {
   url: 'https://accounts.spotify.com/api/token',
   headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
   form: {
     grant_type: 'refresh_token',
     refresh_token: refresh_token
   },
   json: true
 };




 request.post(authOptions, function(error, response, body) {
   if (!error && response.statusCode === 200) {
     
     var access_token = body.access_token;
     
     res.send({
       'access_token': access_token
     });




   }
 });
});





console.log('Listening on 8888');
app.listen(8888);