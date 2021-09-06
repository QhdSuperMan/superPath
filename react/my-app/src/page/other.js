export default function () {
    return <p>动态加载组件
        <button onClick={ () => { new Error(11111) } }> 111</button>
    </p>
}