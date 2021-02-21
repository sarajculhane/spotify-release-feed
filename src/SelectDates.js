import React from 'react'

export default (props) => {
    const {handleSelect} = props
    return (
        <>
    <select class="form-select" onChange={handleSelect}>
        <option selected>Time Period</option>
        <option value="week">Past Week</option>
        <option value="month">Past Month</option>
        <option value="year">Past Year</option>
    </select>
</>
    )
}
