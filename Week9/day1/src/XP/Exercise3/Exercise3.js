import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import ShopScreen from './ShopScreen'
import ErrorBoundary from './ErrorBoundary'

export default class Exercise3 extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav />
                <Switch>
                    <ErrorBoundary>
                        <Route path='/' exact component={HomeScreen} />
                        <Route path='/profile' exact component={ProfileScreen} />
                        <Route path='/shop' exact component={ShopScreen} />
                    </ErrorBoundary>
                </Switch>
            </BrowserRouter>
        )
    }
}
