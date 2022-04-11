const DefaultFilter = {
    view: 'all'
}
const filterRenducer = (state = DefaultFilter, { type, value }) => {
    console.log('filterRenducer', type, value)
    switch (type) {
        case 'GET_FILTER':
            break
        case 'SELCT_FILTER':
            state.view = value
            break;
        default:
            break;
    }
    return state
}

export default filterRenducer