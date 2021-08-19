import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({ superheroes, chooseSuperhero }) => {
    return (
        <div className='card-list'>
            {superheroes.map((superhero) => {
                return <Card {...superhero} clickImage={(x) => chooseSuperhero(x)} />
            })}
        </div>
    )
}

export default CardList
