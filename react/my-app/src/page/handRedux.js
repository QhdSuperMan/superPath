import React from "react";
import react, { useState, useContext } from "react";
const appContext = react.createContext(null)

function reducer(state, { type, value }) {
    if (type === 'name') {
        return {
            ...state,
            name: value
        }
    } else if (type === 'age') {
        return {
            ...state,
            age: value
        }
    }
}

function Son1() {
    const context = useContext(appContext)
    const onChange = (e) => {
        context.appState.name = e.target.value
        context.setState({ ...context.appState })
    }
    return (
        <appContext.Consumer >
            {
                (store) => {
                    return (<div>
                        名字：<input onChange={(e) => {
                            store.setState(reducer(store.appState, { type: 'name', value: e.target.value }))
                        }}></input>
                        年龄：<input onChange={(e) => {
                            store.setState(reducer(store.appState, { type: 'age', value: e.target.value }))
                        }}></input>
                        <p>son1 name: {store.appState.name}
                            年龄: {store.appState.age}
                        </p>
                    </div>)
                }
            }
        </appContext.Consumer>
    )
}

function mapStateToProps(state) {
    return {
        name: state.name,
        age: state.age
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeName: (e) => dispatch({ type: 'name', value: e })
    }
}
function createWrapper(mapStateToProps, mapDispatchToProps) {
    return function (Comments) {
        // function Apapa(props) {
        //     console.log(props, comments)
        //     return (<div></div>)
        // }
        return function (props) {
            return (<appContext.Consumer >
                {
                    (store) => {
                        console.log(store);
                        var methods = mapDispatchToProps((args) => {
                            store.setState(reducer(store.appState, args))
                        })
                        var obj = mapStateToProps(store.appState)
                        return <Comments {...obj} {...methods} />
                    }
                }
            </appContext.Consumer>)
        }
    }
}
const CopySon = createWrapper(
    mapStateToProps,
    mapDispatchToProps
)(Son2)
function Son2(props) {
    return (
        <div>
            <p>son2
                name: {props.name}
                年龄: {props.age}
                改变名字
                <input onChange={(e) => {
                    props.changeName(e.target.value)
                }}></input>

            </p>
        </div>

    )
}





export default function App() {
    const [appState, setState] = useState({ name: '张三', age: 18 })

    return (
        <appContext.Provider value={{ appState, setState }} >
            <Son1></Son1>
            <CopySon></CopySon>
        </appContext.Provider>

    )
}