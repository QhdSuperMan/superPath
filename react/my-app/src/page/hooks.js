import React, { useState, useEffect } from 'react'
import { useFriendStatus } from './config/hook.js'
function Example() {
    const count = useFriendStatus()
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log('副作用2', count)
    }, [count2])
    return (
        <div>
            {count}
            {count2}
            {/* <button onClick={() => { setCount(count + 1) }}>click</button> */}
            <button onClick={() => { setCount2(count2 + 1) }}>click2</button>
        </div>
    );
}
export default Example


