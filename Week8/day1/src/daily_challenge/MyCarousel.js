import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { randomId } from '../utils'

const images = [
    {
        src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg',
        location: 'Hong Kong',
    },
    {
        src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp',
        location: 'Macao',
    },
    {
        src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp',
        location: 'Japan',
    },
    {
        src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp',
        location: 'Las Vegas',
    },
]

export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                {images.map(({ src, location }) => (
                    <div key={randomId()}>
                        <img src={src} alt='image' />
                        <p className='legend'>{location}</p>
                    </div>
                ))}
            </Carousel>
        )
    }
}
