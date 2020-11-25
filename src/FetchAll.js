import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'

const FetchAll = (props) => {
    const {ids, token, total} = props
    const [tracks, setTracks] = useState('')

    console.log(ids, total)

    useEffect(() => {
        const fetchTracks = async (id) => {
                try {
                    if(token) {
                        
                        const {data} = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums?limit=5&market=US&album_type=single`, {
                        headers: {
                        "Authorization": `Bearer ${token}`
                        }
                    })
            }
         } catch(err) {
                console.log(err)
            }
        }
        ids.forEach((id) => fetchTracks(id))
    }, [token])

    
    return (
        <div>
        YO
        </div>
    )
}

export default FetchAll