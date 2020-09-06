import { useState, useEffect } from 'react'

const useFetch = (url, options) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(url, options)
        const data = await res.json()
        setData(data)
        setIsLoading(false)
      }catch (err) {
        setError(err)
      }finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url, options])

  return { data, error, isLoading }
}

export default useFetch