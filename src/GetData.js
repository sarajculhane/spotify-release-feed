import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FetchAll from './FetchAll'

const GetData = () => {

    const [idData, setData] = useState([])
    const [token, setToken] = useState('')
    const [last, setLast] = useState('')
    const [currCall, setCur] = useState([])
    const [total, setTotal] = useState(0)

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
        const fetchArtists = async () => {
        
        try{
            const {data} = await axios.get(`https://api.spotify.com/v1/me/following?type=artist&limit=50${last}`, {
                headers: {
                "Authorization": `Bearer ${token}`
                }
            })
            if(total === 0) setTotal(data.artists.total)
            setCur(data.artists.items.map((artist) => artist.id))
            setData(prev => [...currCall, ...prev])
            setLast(`&after=${currCall[currCall.length-1]}`)
        } catch(err) {
            console.log(err)
        }
        }
        fetchArtists()

    }, [token, last])
    console.log(total)
    return (
        <div>
        <div>hi there</div>
        <FetchAll ids={idData} token={token} total={total}/>
        </div>
    )
}

export default GetData;