import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import Tracks from './Tracks'

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
        
    }, []) 

        return (
            <div>
                
            {/* <div className='search-bar'> <Search /> </div> */}
        <div className="track-list">
            
         {tracks.length === newTotal && tracks.length > 0 ? <Tracks tracks={tracks} token={token} /> : <div></div>}
        </div>
        </div>

    )
}

export default FetchAll;