import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import FetchAll from './FetchAll'

const GetData = () => {

    const [idData, setData] = useState([])
    const [token, setToken] = useState('')
    const [last, setLast] = useState('')
    const [currCall, setCur] = useState([])
    const [total, setTotal] = useState(0)
    const [count, setCount] = useState(0)
    const [len, setLen] = useState([])

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
    })

    useEffect(() => {
        const fetchArtists = async () => {
        
        try{
            if(token) {
                const {data} = await axios.get(`https://api.spotify.com/v1/me/following?type=artist&limit=50${last}`, {
                    headers: {
                    "Authorization": `Bearer ${token}`
                    }
                })
            
                setCur(data.artists.items.map((artist) => artist.id))
                setData(prev => [...currCall, ...prev])
                setLast(`&after=${currCall[currCall.length-1]}`)
                setCount(count + 1)
                setTotal(data.artists.total)
                setLen(prev => Number(data.artists.items.length) + Number(prev))
        }
        } catch(err) {
            console.log(err)
        }
        }
        
        fetchArtists()
        
    }, [token,last])
    return (
        <div>
            Test

       { idData.length === len? <FetchAll ids={idData} token={token} total={total}/> : <div>Loading</div>}
        </div>
    )
}

export default GetData;