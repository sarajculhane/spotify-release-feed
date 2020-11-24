import React, {useEffect, useState} from 'react'
import axios from 'axios'

const FetchAll = (props) => {
    const {ids} = props
    const [tracks, setTracks] = useState([])
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
        const fetchTracks = async (id) => {
                try {
                    if(token) { 
                        const {data} = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums?limit=5&market=US&album_type=single`, {
                        headers: {
                        "Authorization": `Bearer ${token}`
                        }
                    })
                    setTracks(prev => [data, ...prev])
                }
            } catch(err) {
                console.log(err)
            }
        }
        ids.forEach((id) => fetchTracks(id))
    }, [token, ids])

    if(tracks.length === ids.length ) console.log(tracks)

    return (
        <div>from fetchTracks</div>
    )
}

export default FetchAll