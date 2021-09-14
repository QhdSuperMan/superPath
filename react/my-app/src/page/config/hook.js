import React, { useState, useEffect } from 'react'


export function useFriendStatus() {
    const [count, setCount] = useState(0);
    useEffect((props) => {
        console.log('副作用1', count)
    })
    return [count,setCount]
}