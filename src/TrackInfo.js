import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router'



const TrackInfo = () => {
    // const {id} = props.match.params
    // const history = useHistory()
    // const token = history.location.hash.split('=').slice(1).join('').split('&refresh_token')[0]
    // const id = history.location.pathname.split('/')[1]
    // console.log(id, 'hello')

    // const [trackInfo, setInfo] = useState({})

    // useEffect(() => {
    //     const getTrackInfo = () =>  {
    //     try {
    //         const {data} = await axios.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
    //             headers: {
    //             "Authorization": `Bearer ${token}`
    //             }
    //         })
    //     } catch(err) {
    //         console.log(err)
    //     }
    //     }
    //     getTrackInfo()
    // })

    return (
    <div className='right-text'>
    hi
    </div>
    )
}

export default withRouter(TrackInfo);