import React from 'react'
import { Switch, Route } from 'react-router'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'
import store from './redux/store'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Movie from './pages/Movie'
import './style.css'

const DC = () => {
    return (
        <Provider store={store}>
            <Helmet>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
                    integrity='sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=='
                    crossorigin='anonymous'
                    referrerpolicy='no-referrer'
                />
            </Helmet>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/movie/:id' component={Movie} />
            </Switch>
            <Footer />
        </Provider>
    )
}

export default DC
