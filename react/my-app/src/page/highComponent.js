import React from 'react'
class son extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 111
        }
    }
    render() {
        return (
            <div>{JSON.stringify(this.state)}</div>
        );
    }
}
let iihoc = (WrapComponet) => class extends WrapComponet {
    constructor(props) {
        super(props)
        this.state = {
            num: 2000
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <div onClick={this.clickComponent}>iiHoc 点击</div>
                {/* //用的是父组件(WrapComponet)的state； */}
                <div><WrapComponet {...this.props} /></div>
                {/* //反向继承，用的是(本                                                                                                                                                                                               )子组件的state； */}
                <div>{super.render()}</div>
            </div>

        )
    }
}


var example = iihoc(son)
export default example