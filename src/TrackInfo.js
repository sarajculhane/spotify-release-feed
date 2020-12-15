import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {withRouter, useHistory} from 'react-router'
import Player from './AudioPlayer'



const TrackInfo = (props) => {
    const {track, token} = props
    const id = track.id

    const [trackInfo, setInfo] = useState({})
    const [min, setMinutes] = useState('')

    const getMin = (ms) => {

        const min = Math.floor(( ms % (1000 * 60 * 60)) / (1000 * 60));
        const second = (Math.floor((ms % (1000 * 60)) / 1000)/ 100).toFixed(2).toString().slice(2);

        console.log(second)

        return `${min}:${second}`
    }

    useEffect(() => {
        const getTrackInfo = async (id) =>  {
        try {
            const {data} = await axios.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
                headers: {
                "Authorization": `Bearer ${token}`
                }
            })
            setInfo(data)
            setMinutes(getMin(data.items[0].duration_ms))


        } catch(err) {
            console.log(err)
        }
        }
        getTrackInfo(id)
    },[track, token])
    return (
       
    <div>
    
       {  Array.isArray(trackInfo.items) ? <div>
        {console.log(trackInfo, Array.isArray(trackInfo.items))}
       <div>Full Duration: {min} minutes</div>
        <div><Player url={trackInfo.items[0].preview_url}/></div>
        </div>: 
            <div>Loading </div>
    }
    </div>
    )
}

export default withRouter(TrackInfo);