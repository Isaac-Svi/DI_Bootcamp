import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { connect } from 'react-redux'
import { changeText, getCity } from '../redux/actions'

const AutoComplete = ({ text, results, changeText, getCity }) => {
    return (
        <Autocomplete
            autoFocus
            id='combo-box-demo'
            onChange={(_, val) => getCity(val.LocalizedName)}
            inputValue={text}
            onInputChange={changeText}
            options={results}
            getOptionLabel={(option) => (option ? option.LocalizedName : '')}
            style={{ width: 300 }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label='Search a city'
                    variant='outlined'
                />
            )}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.textReducer.results,
        text: state.textReducer.text,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (e) => dispatch(changeText(e)),
        getCity: (val) => dispatch(getCity(val)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete)
