import React from 'react';
import { Motion, spring } from '../../src/react-motion';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  };

  handleMouseDown = () => {
    this.setState({ open: !this.state.open });
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle11
        </button>

        <Motion style={{ x: spring(this.state.open ? 400 : 0) }}>
          {({ x }) => {
            // console.log(x)
            return <div className="demo0">
              <div className="demo0-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>
          }
            // children is a callback which should accept the current value of
            // `style`

          }
        </Motion>
      </div>
    );
  };
}
