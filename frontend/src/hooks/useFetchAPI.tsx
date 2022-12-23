import axios from 'axios'

type ResponseData = {
  length: number
  content: string
}

export const useFetchApi = () => {
  const fetchRequest = async (
    level: string,
    category: string,
    limit: string
  ) => {
    const response = await axios.get<ResponseData>(
      `/api/index?&category=${category}&level=${level}&limit=${limit}`
    )
    return { quiz: response.data, error: null, loading: false }
  }
  return { fetchRequest }
}
