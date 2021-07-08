//导出函数
const log = msg => {
    console.log('......info........')
    console.log(msg)
    console.log('......end........')
}

const error = msg => {
    console.error('......error........')
    console.error(msg)
    console.error('......end........')
}

export {
    log,
    error
}