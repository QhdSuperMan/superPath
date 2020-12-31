function combination(list) {
    return list.reduce((result, subList) => {
        return subList.reduce((subResult, item) => {
            let tail = result.length ? result.map(l => [...l, item]) : [[item]]
            return subResult.concat(tail)
        }, [])
    }, [])
}