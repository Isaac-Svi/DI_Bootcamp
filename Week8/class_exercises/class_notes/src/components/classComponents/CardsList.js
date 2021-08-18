import React from 'react'
import Card from './Card'

class CardsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            robots: [],
            search: '',
            inputText: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((x) => x.json())
            .then((data) => this.setState({ robots: data }))
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        //
        e.preventDefault()
        this.setState({ inputText: this.state.search })
    }

    render() {
        const { robots, search, inputText } = this.state

        return (
            <>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type='search'
                        name='search'
                        value={search}
                        onChange={this.handleChange.bind(this)}
                        placeholder='Search robots...'
                    />
                    <button>Submit</button>
                </form>
                {robots
                    .filter((x) => x.name.toLowerCase().startsWith(inputText))
                    .map((item, i) => {
                        return <Card key={i} robotinfo={item} />
                    })}
            </>
        )
    }
}
export default CardsList
