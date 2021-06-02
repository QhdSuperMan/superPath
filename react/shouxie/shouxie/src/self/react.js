function createElement(type, props, ...children) {
    console.log(arguments, 44)
    return {
        type,
        props: {
            ...props,
            children: children
        }

    }
}

function careatDom(vdom, container) {
    if (typeof (vdom) === 'string') {
        container.innerText = vdom
    } else {
        var node = document.createElement(vdom.type)
        if (typeof (vdom.props.children) === 'string') {
            node.innerText = vdom.props.children
        } else {
            // vdom.props.children.map(val => {
            //     render(val, node)
            // })
        }

        container.appendChild(node)
    }
}

function render(vdom, container) {
    console.log(vdom)
    // careatDom()
}
// fiber {
//     dom: 真是dom
//     parent: 父亲
//     child 第一个子元素
//     slibing 兄弟节点
// }


let nextUnitOfWork = null

function workLoop(deadline) {
    while (nextUnitOfWork && deadline.timeRemaining() > 1) {
        nextUnitOfWork = performUnitOfWork()
    }
    requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)

function performUnitOfWork(fiber) {
    if (!fiber.dom) {
        fiber.dom = careatDom(fiber)
    }
    if (fiber.parent) {
        fiber.parent.dom.appendChild(fiber.dom)
    }
    const elements = fiber.props.childen

    // 构建fiber的结构

    let index = 0
    let prevSlibing = null
    while (index < elements.length) {
        let element = elements[index]
        const newFiber = {
            type:element.type,
            props: element.props,
            parent: fiber,
            dom: null
        }

        if (index = 0 ) {
            fiber.child = newFiber
        } else {
            prevSlibing.slibing = newFiber
        }

        prevSlibing = fiber
        index++

    }
}


export default {
    createElement,
    render
}