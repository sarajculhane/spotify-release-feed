import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import FetchTracks from './FetchTracks'
import Search from './Search'

const GetData = (props) => {

    const [idData, setData] = useState([])
    const [last, setLast] = useState('')
    const [currCall, setCur] = useState([])
    const [total, setTotal] = useState(0)
    const [count, setCount] = useState(0)
    const [len, setLen] = useState([])
    const [date, setDate] = useState('')
    const curDate = new Date(Date.now())
    


    const {token} = props
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
        setDate(curDate)
    }, [token,last])
    return (
        
        <div className='data'>
            <div className='track-container'>
                {/* <Search /> */}
                <div className='track-header'>Your followed artists' most recent releases as of {date.toLocaleString().split(',')[0]}</div>
            </div>
       { idData.length === len? <FetchTracks ids={idData} token={token} total={total}/> : <div></div>}
        </div>
    )
}

export default GetData;