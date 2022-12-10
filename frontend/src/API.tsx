import axios from 'axios'

type ResponseData = {
  length: number
  current: string
}

export const useFetchApi = () => {
  const fetchRequest = async (
    level: string,
    category: string,
    limit: string
  ) => {
    const response = await axios.get<ResponseData>(
      `http://localhost:3000/?&category=${category}&level=${level}&limit=${limit}`
    )
    return { quiz: response.data, error: null, loading: false }
  }
  return { fetchRequest }
}
