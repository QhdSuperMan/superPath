import React, { useState, useEffect, useRef,useCallback } from 'react'
import { useFriendStatus } from './config/hook.js'
function Example() {
    const [count, setCount] = useFriendStatus()
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log('副作用2', count)
    }, [count2])
    return (
        <div>
            {count}
            {count2}
            <button onClick={() => { setCount(count + 1) }}>click</button>
            <button onClick={() => { setCount2(count2 + 1) }}>click2</button>
        </div>
    );
}
function Exampletwo(props) {
    // 把最新的 props 保存在一个 ref 中
    const latestProps = useRef(props);
    console.log("latestProps")
    useEffect(() => {
        latestProps.current = props;
    });

    useEffect(() => {
        function tick() {
            // 在任何时候读取最新的 props
            console.log(latestProps.current);
        }

        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []); // 这个 effect 从不会重新执行
}
function createdRow() {
    console.log("createdRow")
    return 1
}
function Counter() {
    const [count, setCount] = useState(() => createdRow());
    Exampletwo(count)
    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1); // ✅ 在这不依赖于外部的 `count` 变量
        }, 1000);
        return () => clearInterval(id);
    }, []); // ✅ 我们的 effect 不使用组件作用域中的任何变量

    return <h1>{count}

    </h1>;
}

// useEventCallback
function Form() {
    const [text, updateText] = useState('');
    const textRef = useRef();

    useEffect(() => {
        textRef.current = text; // 把它写入 ref
    },[text]);

    const handleSubmit = useCallback(() => {
        const currentText = textRef.current; // 从 ref 读取它
        alert(currentText);
    }, [textRef]); // 不要像 [text] 那样重新创建 handleSubmit
    console.log(handleSubmit)
    return (
        <>
            <input value={text} onChange={e => updateText(e.target.value)} />
            <button onClick={() => handleSubmit()}>点击</button>
        </>
    );
}


// useEventCallback
function FormTwo() {
    const [text, updateText] = useState('');
    // 即便 `text` 变了也会被记住:
    const handleSubmit = useEventCallback(() => {
      alert(text);
    }, [text]);
  
    return (
      <>
        <input value={text} onChange={e => updateText(e.target.value)} />
        <button onClick={() => handleSubmit()}>点击</button>
      </>
    );
  }
  
  function useEventCallback(fn, dependencies) {
      console.log('useEventCallback')
    const ref = useRef(() => {
      throw new Error('Cannot call an event handler while rendering.');
    });
  
    useEffect(() => {
      ref.current = fn;
    }, [fn, ...dependencies]);
  
    return useCallback(() => {
      const fn = ref.current;
      console.log('useCallback')
      return fn();
    }, [ref]);
  }
export default FormTwo


