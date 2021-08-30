import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { Provider } from 'react-redux'
import store from './redux/store'

const MiniProject = () => {
    return (
        <Provider store={store}>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/post/:post_id' exact component={Post} />
            </Switch>
        </Provider>
    )
}

export default MiniProject
