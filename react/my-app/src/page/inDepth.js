import React from 'react'
class inDepth extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Story story='video'></Story>
            </div>
        );
    }
}
const components = {
    photo: function(){ return <span>photo</span> },
    video: function(){ return <span>video</span> }
};

function Story(props) {
    // 正确！JSX 类型可以是大写字母开头的变量。
    const SpecificStory = components[props.story];
    console.log(SpecificStory)
    return <SpecificStory  />;
}
export default inDepth