import React from 'react'
class Container extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div>壳子
              {this.props.children}
            </div>
        );
    }
}
export default Container