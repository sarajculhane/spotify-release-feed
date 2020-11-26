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
        useEffect(() => {
            const getUser = async (token) => {
                try {
                    const {data} = await axios.get('https://api.spotify.com/v1/me', 
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`
                          },
                    })
                    console.log(data)
                    setSuccess(true)
                } catch(err) {
                    console.log(err, 'the axios err')
                    setSuccess(false)
                }
            }
            getUser(access_token)
        }, [access_token])

        return (
           
    
          <div>

          {access_token ? <div>
                  {access_token}
                  {refresh_token}
                  </div> : <div></div>}

        {success ? <div id="loggedin">log</div> : <div id="login"></div>}
        </div>
    
        )


}

export default Login