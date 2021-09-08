import React from 'react'
const ColorContext = React.createContext('color')
const ThemeContext = React.createContext('light')
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: 'red' }
  }
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ColorContext.Provider value={this.state}>
        <ThemeContext.Provider value='light'>
          <input onChange={(e) => { console.log(e);this.setState({
            color: e.target.value
          }) }}></input>
          <Toolbar />
        </ThemeContext.Provider>
      </ColorContext.Provider>
    );
  }
}
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
class Test extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  constructor(props) {
    super(props)
    console.log()
  }
  render() {
    return <div>
      <button onClick={ () => {
        this.props.one.color = 1
      } }>click</button>
      {
        this.props.children
      }
    </div>
  }
}
class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  constructor(props) {
    super(props)
    console.log()
  }
  render() {
    return <ColorContext.Consumer>
      {one => {
        return <ThemeContext.Consumer>
          {two => {
            return <Test one={one} two={two}>{one.color}</Test>
          }
          }
        </ThemeContext.Consumer>
      }
      }
    </ColorContext.Consumer>
  }
}
export default App