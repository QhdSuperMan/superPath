import React from 'react'

class Reff extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const ref = React.createRef();
        return <div>
            <span onClick={() => { console.log(ref) }} >click</span>
            {/* <span ref={ref} className='ssds'></span> */}
            <Demo ref={ref} />
        </div>
    }
}
class FancyButton extends React.Component {
    focus() {
        // ...
    }
    heihei = 2
    render() {
        return <p>1111</p>
    }
    // ...
}
var Demo = logProps(FancyButton)
function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        haha = '1'
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }
        render() {
            var {ortherRef} = this.props
            return <WrappedComponent ref={ortherRef} {...this.props} />;
        }
    }

    return React.forwardRef((props, ref) => (
        <LogProps ortherRef={ref}></LogProps>
    ));
}


export default Reff