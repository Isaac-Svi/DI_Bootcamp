import React, { Component } from 'react'
import Router, { Route } from './components/Router'
import Countries from './components/Countries'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import CountryLinks from './components/CountryLinks'
import CityLinks from './components/CityLinks'

export default class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Router>
                <Route path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact'>
                    <Contact />
                    <Countries />
                </Route>
                <Route path='/countries' component={CountryLinks} />
                <Route path='/country/:id' component={CityLinks} />
            </Router>
        )
    }
}

// get notes to see Ziv's way of doing it
