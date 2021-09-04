import React from 'react'
import '../styles/Search.css'

const Search = ({ mode, search, setSearch, setMode, fetchItems }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchItems()
    }

    return (
        <nav className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search books'
                />
                <button>Search</button>
            </form>
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
                <option value='default'>Sort</option>
                <option value='newest'>Newest</option>
                <option value='oldest'>Oldest</option>
            </select>
        </nav>
    )
}

export default Search
