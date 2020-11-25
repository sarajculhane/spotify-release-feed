import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'

const FetchAll = (props) => {
    const {ids, token, total} = props
    const [tracks, setTracks] = useState([])
    const [newTotal, setNewTotal] = useState(0)



    useEffect(() => {
        let mounted = false
        const fetchTracks = async (id) => {
            
                try {
                    
                    if(token && total !== 0) {
                        
                        const {data} = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums?limit=3&market=US&album_type=single`, {
                        headers: {
                        "Authorization": `Bearer ${token}`
                        }
                    })

                    if(!mounted) {
                        setTracks(prev => [data.items, ...prev])
                        
                    }

                    if(total > 0) setNewTotal(total)
            }
         } catch(err) {
                console.log(err)
            }
        }
       ids.forEach((id) => fetchTracks(id)) 

        return () => {
            mounted  = true
        }
       
    }, [token, ids]) 

   if(tracks.length === newTotal && tracks.length > 0) console.log(tracks)

    return (
        <div>
            hi there
        </div>
    )
}

export default FetchAll