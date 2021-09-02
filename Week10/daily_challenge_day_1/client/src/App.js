import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AuthProvider from './providers/AuthProvider'
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
    return (
        <AuthProvider>
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <PrivateRoute
                        redirect='/signin'
                        path='/dashboard'
                        exact
                        component={Dashboard}
                    />
                    <PublicRoute
                        redirect='/dashboard'
                        path='/signin'
                        exact
                        component={Signin}
                    />
                    <PublicRoute
                        redirect='/dashboard'
                        path='/register'
                        exact
                        component={Register}
                    />
                </Switch>
            </div>
        </AuthProvider>
    )
}

export default App
