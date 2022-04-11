/** 获取 filter*/
export const getFilter = () => {
    return {
        type: 'GET_FILTER'
    }
}

/** 选择 filter*/
export const selectFilter = (type) => {
    return {
        type: 'SELCT_FILTER',
        value: type
    }
}


export default {
    getFilter,
    selectFilter
}