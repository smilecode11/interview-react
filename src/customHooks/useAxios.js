import { useState, useEffect } from 'react'

import axios from 'axios'

function useAxios(url) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then(resp => setData(resp))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [url])

    return [loading, data, error]
}

export default useAxios
