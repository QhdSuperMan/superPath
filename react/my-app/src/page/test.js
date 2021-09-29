import React from 'react'
class example extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1
        }
        this.add = this.add.bind(this)
        this.bindRef = this.bindRef.bind(this)
        this.button = React.createRef()
        var a = React.cloneElement(
            <p>111</p>
        )
        console.log(a)
    }
    add() {
        this.setState({
            ...this.state,
            num: this.state.num + 1
        })
        this.setState((prev, props) => {
            console.log(prev)
            return {
                ...prev,
                num: prev.num + 1
            }
        })
        console.log(this.button)
    }
    bindRef(e) {
        this.button = e
        return e
    }
    render() {
        return (
            <div>
                {
                    React.cloneElement(
                        <p>cloneElement</p>
                    )
                }
                {this.state.num}
                <button ref={this.bindRef} onClick={this.add}>点击</button>
            </div>
        );
    }
}
export default example