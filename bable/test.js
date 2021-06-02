async function demo () {
    var a = await test()
    console.log(a)
}

function test () {
    return new Promise((reslove,reject)=> {
        reslove(1)
    })
}
demo()