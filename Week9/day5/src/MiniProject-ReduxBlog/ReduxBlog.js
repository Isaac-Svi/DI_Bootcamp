import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { Provider } from 'react-redux'
import store from './redux/store'
import './style.css'

const MiniProject = () => {
    return (
        <Provider store={store}>
            {/* adding style link like this, so i don't have to add it to index.html */}
            <Helmet>
                <link
                    href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css'
                    rel='stylesheet'
                />
            </Helmet>
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
