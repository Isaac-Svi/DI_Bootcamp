import React, { Component, createContext } from 'react'
import Nav from './Nav'

const RouterContext = createContext(null)

export default class Router extends Component {
    constructor(props) {
        super(props)

        this.state = {
            route: location.pathname,
        }

        this.paths = this.props.children.map(({ props }) => props.path)
        this.params = this.getParams(location.pathname)
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => this.goTo())
        window.addEventListener('popstate', () => {
            const route = location.pathname
            this.params = this.getParams(route)
            this.setState({ route })
        })
    }

    getRegex = (path) => {
        return new RegExp('^' + path.replace(/\/:\w+/g, '\\/(.+)') + '$', 'g')
    }

    getParams = (route) => {
        const { paths } = this
        const path = paths.find((path) => this.getRegex(path).test(route))
        const keys = [...path.matchAll(/:(\w+)/g)].map((x) => x[1])
        const values = [...route.matchAll(this.getRegex(path))].map((x) => x[1])
        const params = {}

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            params[key] = values[i]
        }

        return params
    }

    goTo = (route = location.pathname) => {
        history.pushState(null, null, route)

        this.params = this.getParams(route)

        this.setState({ route })
    }

    render() {
        const value = {
            ...this.state,
            params: this.params,
            goTo: this.goTo,
            getRegex: this.getRegex,
        }

        return (
            <RouterContext.Provider value={value}>
                <Nav goTo={this.goTo} />
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}

export const Route = (props) => {
    const { component: Component, path } = props

    return (
        <RouterContext.Consumer>
            {({ getRegex, route, params }) => {
                return (
                    getRegex(path).test(route) &&
                    (Component ? (
                        // don't have to deal with props here, because
                        // we already have all props for component in
                        // props.component. We're just adding new prop "match"
                        <Component match={{ params }} />
                    ) : (
                        // necessary to clone the children, since otherwise, we can't add
                        // the new match and params objects to the children dynamically
                        React.Children.map(props.children, (child) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child, {
                                    ...child.props,
                                    match: { params },
                                })
                            }
                            return child
                        })
                    ))
                )
            }}
        </RouterContext.Consumer>
    )
}

export const Link = (props) => {
    const { to, children } = props

    return (
        <RouterContext.Consumer>
            {({ goTo }) => {
                const handleClick = (e) => {
                    e.preventDefault()
                    goTo(to)
                }

                return (
                    <a href={`${to}`} onClick={handleClick}>
                        {children}
                    </a>
                )
            }}
        </RouterContext.Consumer>
    )
}
