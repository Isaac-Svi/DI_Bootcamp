import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'
import './style.css'
// import { createTheme } from '@material-ui/core/styles'

// const theme = createTheme({
//     palette: {
//         primary: {
//             light: '#757ce8',
//             main: '#3f50b5',
//             dark: '#002884',
//             contrastText: '#fff',
//         },
//         secondary: {
//             light: '#ff7961',
//             main: '#f44336',
//             dark: '#ba000d',
//             contrastText: '#000',
//         },
//     },
// })

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/favorites' exact component={FavoritesPage} />
            </Switch>
        </Router>
    )
}

export default App
