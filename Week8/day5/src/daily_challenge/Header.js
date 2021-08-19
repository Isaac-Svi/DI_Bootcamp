import React from 'react'
import Score from './Score'
import TopScore from './TopScore'
import './Header.css'

const Header = ({ score, topScore }) => {
    return (
        <div className='header'>
            <h1>
                Superheroes Memory Game
                <div className='scores'>
                    <Score score={score} />
                    <TopScore topScore={topScore} />
                </div>
            </h1>

            <h2>
                Get points by clicking on an image but don't click on any more than once!
            </h2>
        </div>
    )
}

export default Header
