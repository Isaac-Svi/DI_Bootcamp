import React from 'react'
import '../styles/Book.css'

const Book = ({ authors, imageLinks, title, publishedDate }) => {
    const authorPrefix =
        (!authors || authors.length === 1 ? 'Author' : 'Authors') + ': '
    const joined = !authors ? '' : authors.join(', ')
    const authorText =
        joined.length <= 35 ? joined : joined.substring(0, 35) + '...'

    return (
        <div className='book'>
            <img
                src={
                    imageLinks
                        ? imageLinks.thumbnail
                        : '/images/book-placeholder.png'
                }
                alt={title}
            />
            <h4>{title}</h4>
            <p>{authorPrefix + authorText}</p>
            <p>Published: {publishedDate}</p>
        </div>
    )
}

export default Book
