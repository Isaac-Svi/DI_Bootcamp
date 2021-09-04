import React, { useState, useEffect, useCallback } from 'react'
import Book from './components/Book'
import Search from './components/Search'
import './style.css'

const getDate = (item) => parseInt(item.volumeInfo.publishedDate)

const sorters = {
    default: (x) => x,
    newest: (x) => [...x].sort((a, b) => getDate(b) - getDate(a)),
    oldest: (x) => [...x].sort((a, b) => getDate(a) - getDate(b)),
}

const App = () => {
    const [search, setSearch] = useState('javascript')
    const [mode, setMode] = useState('default')
    const [items, setItems] = useState([])

    const fetchItems = useCallback(() => {
        fetch(process.env.BOOKS_API + `?q=${search}`)
            .then((res) => res.json())
            .then((data) => setItems(data.items))
            .catch((err) => console.log(err))
    }, [search])

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <div className='app'>
            <Search
                search={search}
                setSearch={setSearch}
                mode={mode}
                setMode={setMode}
                fetchItems={fetchItems}
            />
            <div className='books'>
                {sorters[mode](items).map(({ id, volumeInfo }) => {
                    return <Book key={id} {...volumeInfo} />
                })}
            </div>
        </div>
    )
}

export default App
