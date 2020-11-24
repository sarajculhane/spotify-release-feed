import React, {useEffect, useState} from 'react'
import axios from 'axios'

const FetchAll = (props) => {
    const {ids} = props
    const [tracks, setTracks] = useState({})

    useEffect(() => {
        const fetchTracks = async () => {
                try {
                    const res = await axios.get('/access')
                    const access_token = res.data
                    const {data} = await axios.get(`https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=0&limit=2&include_groups=appears_on&market=US`, {
                        header: {
                            'Authorization': 'Bearer ' + access_token
                        }
                    })
                    console.log(data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchTracks()
    }, [])

    return (
        <div>from fetchTracks</div>
    )
}

export default FetchAll