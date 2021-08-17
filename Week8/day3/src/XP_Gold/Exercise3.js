import React, { Component, createRef } from 'react'

export default class Exercise3 extends Component {
    constructor() {
        super()

        this.divRef = createRef()
        this.divRef2 = createRef()

        this.state = {
            favoriteColor: 'red',
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const { favoriteColor } = prevState

        const text = `Before the update, the favorite was ${favoriteColor}`
        this.divRef.current.innerText = text

        return favoriteColor
    }

    // not using these parameters here, but we can use them.
    // also, snapshot is coming from what's returned from getSnapshotBeforeUpdate
    // difference between getSnapshotBeforeUpdate and componentDidUpdate
    // is that getSnapshotBeforeUpdate happens before update and componentDidUpdate
    // happens after update. Even though both get access to information about
    // the component's state before the update through parameters,
    // getSnapshotBeforeUpdate is mostly used to keep track of things in the
    // component that aren't taken care of by react, like scrollbar position.
    // It's in this component that we can save those changes in a "snapshot"
    // before completing the update.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps)
        console.log(prevState)
        console.log(snapshot)

        const { favoriteColor } = this.state
        const text = `The updated favorite is ${favoriteColor}`
        this.divRef2.current.innerText = text
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' })
        }, 5000)
    }

    render() {
        return (
            <div>
                <h1>
                    My Favorite Color is <em>{this.state.favoriteColor}</em>
                </h1>
                <div ref={this.divRef}></div>
                <div ref={this.divRef2}></div>
            </div>
        )
    }
}
