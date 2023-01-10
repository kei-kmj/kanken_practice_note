import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type ResponseData = {
  length: number
  content: string
}

export const useFetchApi = () => {
  const navigate = useNavigate()

  const fetchRequest = async (
    level: string,
    category: string,
    limit: string
  ) => {
    navigate('/loading')
    const response = await axios.get<ResponseData>(
      `/api/index?&category=${category}&level=${level}&limit=${limit}`
    )
    return { quiz: response.data, error: null, loading: false }
  }
  return { fetchRequest }
}
