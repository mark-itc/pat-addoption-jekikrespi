import React from 'react'

function StatusFilter() {

    const handleStatusChange = () => {

    }
    return (
        <div className='searchContainer'>
            <small>My pets</small>
            <label class="switch">
                <input type="checkbox" onChange={(e) => handleStatusChange(e)} />
                <span class="slider round"></span>
            </label>
            <small>Saved pets</small>
        </div>

    )
}

export default StatusFilter