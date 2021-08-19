import React, { Component } from 'react'
import CardList from './CardList'
import Header from './Header'
import json from './superheroes.json'
import './Game.css'

export default class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            superheroes: json.superheroes,
            score: 0,
            topScore: 0,
        }
    }

    chooseSuperhero = (id) => {
        let { superheroes, score, topScore } = this.state
        const superheroIndex = superheroes.findIndex((a) => a.id === id)

        if (superheroes[superheroIndex].clicked) {
            topScore = score > topScore ? score : topScore
            score = 0
        } else {
            score++
            superheroes[superheroIndex].clicked = true
        }

        superheroes.sort(() => Math.random() - 0.5)
        this.setState({ score, topScore, superheroes })
    }

    render() {
        const { score, topScore, superheroes } = this.state

        return (
            <div>
                <Header score={score} topScore={topScore} />
                <CardList
                    superheroes={superheroes}
                    chooseSuperhero={this.chooseSuperhero}
                />
            </div>
        )
    }
}
