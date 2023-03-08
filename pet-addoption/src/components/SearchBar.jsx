import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SearchBar.css'

function SearchBar({ filters, setFilters }) {

    const [advancedMode, setAdvancedMode] = useState()

    const handleModeChange = ({ target }) => setAdvancedMode(target.checked)

    const handleFilter = (newFilter) => setFilters({ ...filters, ...newFilter })

    return (
        <div className="searchPage">
            <div className='searchContainer'>
                <div className="searchContainer__left">
                    <small>advanced search</small>
                    <label class="switch">
                        <input type="checkbox" onChange={(e) => handleModeChange(e)} />
                        <span class="slider round"></span>
                    </label>

                </div>

                <div className="searchContainer__right">
                    <select className='searchContainer__filter' onSelect={(e) => handleFilter({ type: e.target.value })}>
                        <option disabled hidden selected value="">Animal type</option>
                        <option value="cat">cat</option>
                        <option value="dog">dog</option>
                        <option value="bunny">bunny</option>
                        <option value="parrot">parrot</option>
                    </select>
                    {advancedMode && <select className='searchContainer__filter' onSelect={(e) => handleFilter({ status: e.target.value })}>
                        <option disabled hidden selected value="">Adoption status</option>
                        <option value="avilable">available</option>
                        <option value="adopted">adopted</option>
                        <option value="fostered">fostered</option>
                    </select>}
                    {advancedMode && <input type="number" placeholder="height (in cm)" className='searchContainer__filter' onChange={(e) => handleFilter({ height: e.target.value })}></input>}
                    {advancedMode && <input type="number" placeholder="weight (in kg)" className='searchContainer__filter' onChange={(e) => handleFilter({ weight: e.target.value })}></input>}
                    {advancedMode && <input type="text" placeholder="name" className='searchContainer__filter' onChange={(e) => handleFilter({ name: e.target.value })}></input>}
                </div>
            </div>


        </div>
    )
}

export default SearchBar
