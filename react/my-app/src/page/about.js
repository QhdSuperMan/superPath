import React from 'react'
const ColorContext = React.createContext('color')
const ThemeContext = React.createContext('light')
class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ColorContext.Provider value={{ color: 'red' }}>
        <ThemeContext.Provider value='light'>
          <Toolbar />
        </ThemeContext.Provider>
      </ColorContext.Provider>
    );
  }
}
function Toolbar() {
  return (
    <div>
      1111
      <ThemedButton />
    </div>
  );
}
function test() {
  return (
    <div>
      222
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  render() {
    return <ColorContext.Consumer>
      {
        one => {
          <ThemeContext.Consumer>
            {
              two => {
                console.log(two)
                // <test >88888888</test>;
              }
            }
          </ThemeContext.Consumer>
        }
      }
    </ColorContext.Consumer>
  }
}
export default App