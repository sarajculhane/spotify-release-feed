import React, {useEffect, useState} from 'react'
import axios from 'axios'

const FetchAll = (props) => {
    const {ids} = props
    const [tracks, setTracks] = useState({})
    const [token, setToken] = useState('')

    useEffect(() => {
        const fetchToken = async () => {
                try {
                    const {data} = await axios.get('/access')
                    setToken(data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchToken()
    }, [])

    useEffect(() => {
        const fetchTracks = async () => {
                try {
                    if(token) { 
                        console.log(token)
                        const {data} = await axios.get(`https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums`, {
                        headers: {
                        "Authorization": `Bearer ${token}`
                        }
                    })
                    console.log(data)

                }
            } catch(err) {
                console.log(err)
            }
        }
        fetchTracks()
    }, [token])

    return (
        <div>from fetchTracks</div>
    )
}

export default FetchAll