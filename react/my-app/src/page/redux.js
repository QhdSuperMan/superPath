import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
class Counter extends React.Component {
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.count
    }
}
function mapDispatchToProps(dispatch) {
    console.log(dispatch)
    return {
        onIncreaseClick: () => dispatch( { type: 'increase' })
    }
}
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}
const store = createStore(counter)
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

class example extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
export default example