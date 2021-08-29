import React, { Component } from 'react'
import { connect } from 'react-redux'
import { insert, update } from '../redux/actions'
import '../styles/TransactionForm.css'

class TransactionForm extends Component {
    static setupUpdate = true

    constructor(props) {
        super(props)

        this.state = {
            accountNumber: '',
            FSC: '',
            name: '',
            amount: '',
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.currentIndex !== -1
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex) {
            const transaction = this.props.list[this.props.currentIndex]
            this.setState({ ...transaction })
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { amount, accountNumber, FSC, name } = this.state

        if (this.props.currentIndex === -1) {
            this.props.insert({ amount, accountNumber, FSC, name })
        } else {
            this.props.update({ amount, accountNumber, FSC, name })
        }

        this.setState({ accountNumber: '', FSC: '', name: '', amount: '' })
    }

    render() {
        const { amount, accountNumber, FSC, name } = this.state

        return (
            <form className='transaction-form' onSubmit={this.handleSubmit}>
                <input
                    autoComplete='off'
                    type='text'
                    onChange={this.handleInputChange}
                    value={accountNumber}
                    name='accountNumber'
                    placeholder='Account Number'
                />
                <input
                    autoComplete='off'
                    type='text'
                    onChange={this.handleInputChange}
                    value={FSC}
                    name='FSC'
                    placeholder='FSC'
                />
                <input
                    autoComplete='off'
                    type='text'
                    onChange={this.handleInputChange}
                    value={name}
                    name='name'
                    placeholder='A/C Holder Name'
                />
                <input
                    autoComplete='off'
                    type='text'
                    onChange={this.handleInputChange}
                    value={amount}
                    name='amount'
                    placeholder='Amount'
                />
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        currentIndex: state.currentIndex,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        insert: (newTransaction) => dispatch(insert(newTransaction)),
        // update updates the whole list?
        update: (newTransaction) => dispatch(update(newTransaction)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)
