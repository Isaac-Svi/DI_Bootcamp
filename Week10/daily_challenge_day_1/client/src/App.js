import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AuthProvider from './providers/AuthProvider'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

const App = () => {
    return (
        <AuthProvider>
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <PrivateRoute
                        path='/dashboard'
                        exact
                        component={Dashboard}
                        redirect='/signin'
                    />
                    <PublicRoute
                        path='/signin'
                        redirect='/dashboard'
                        exact
                        component={Signin}
                    />
                    <PublicRoute
                        path='/register'
                        redirect='/dashboard'
                        exact
                        component={Register}
                    />
                </Switch>
            </div>
        </AuthProvider>
    )
}

export default App
