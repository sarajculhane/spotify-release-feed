import React, {useEffect, useState} from 'react'
import axios from 'axios'

const GetData = () => {

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('/data')
            console.log(data)
        }
        fetchData()
    }, [])
    return (
        <div>hi there</div>
    )
}

export default GetData;