import { useState } from 'react'

async function useFetch(fn: Function, ...rest: any[]) {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any>()
  const [error, setError] = useState<string | null>()
  const fetchData = async () => {
    try {
      const data = await fn(...rest)
      setData(data)
    }
    catch {
      setError('An error has ocurred when trying to request data')
    }
    finally {
      setLoading(false)
    }
  }
  await fetchData()
  return {
    loading,
    data,
    error,
  }
}

export default useFetch
