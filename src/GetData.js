import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FetchAll from './FetchAll'

const GetData = () => {

    const [idData, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('/data')
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div>
        <div>hi there</div>
        <FetchAll ids={idData} />
        </div>
    )
}

export default GetData;