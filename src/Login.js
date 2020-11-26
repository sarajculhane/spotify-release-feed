import React, {useState, useEffect} from 'react'
import axios from 'axios'

    //       document.getElementById('obtain-new-token').addEventListener('click', function() {
    //         $.ajax({
    //           url: '/refresh_token',
    //           data: {
    //             'refresh_token': refresh_token
    //           }
    //         }).done(function(data) {
    //           access_token = data.access_token;
    //           oauthPlaceholder.innerHTML = oauthTemplate({
    //             access_token: access_token,
    //             refresh_token: refresh_token
    //           });
    //         });
    //       }, false);
    //     }
    //   })();

const Login = () => {
        function getHashParams() {
          var hashParams = {};
          var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
        }

        const {access_token, refresh_token, error} = getHashParams()
        const [success, setSuccess] = useState(false)
        const [user, setUser] = useState({})
        const [token, setToken] = useState(access_token)
        const [status, setStatus] = useState('login') 


        useEffect(() => {
            const getUser = async (token) => {
                try {
                    const {data} = await axios.get('https://api.spotify.com/v1/me', 
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`
                          },
                    })
                    setStatus('loggedin')
                    setUser(data)
                } catch(err) {
                    console.log(error, 'the axios err')
                }
            }
            getUser(access_token)
        }, [access_token])

        const handleClick = async (refresh_token) => {
                    try {
                        const {data} = await axios.get('/refresh_token', 
                        {
                            headers: {
                                "Authorization": `Bearer ${refresh_token}`
                              },
                        })
                        console.log(data)
                    } catch(err) {
                        console.log(err, "click error")
                    }
                }

        return (
           
            
          <div>
    {console.log(token, user)}

          {status === 'loggedin' ? <div>
                  {token}
                  {refresh_token}
                  {user.email}
                  </div> : 
                  
                  <div>Please login
                  <a href="/login" className="btn btn-primary">Log in with Spotify</a></div>}
        {/* {success ? <div id="loggedin">log
        <button onClick={handleClick}>Get new refresh_token</button></div> : <div id="login">login</div>} */}
        
        </div>
    
        )


}

export default Login