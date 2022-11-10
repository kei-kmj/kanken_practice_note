import axios, {AxiosError} from 'axios'
import {useEffect, useState} from "react";

type ResponseData = {
    current: string
}

export interface Response {
    data: ResponseData
    error: AxiosError | null,
    loading: boolean
}


const SEMI_FIRST = "level=11"
const FIRST = "level=1"

const ALL = ""
const READING = "&category=1"
const RARE_READING = "&category=2"
const WRITING = "&category=3"
const WRITING_IDIOM = "&category=4"
const MEANING_IDIOM = "&category=5"
const HISTORICAL_IDIOM = "&category=6"
const SYNONYMS_OR_ANTONYMS = "&category=7"

const LIMIT = "limit=10"



export const useFetchApi = () => {
    const [response, setResponse] = useState<Response>({data: {current: ''}, error: null, loading: false})


    useEffect(() => {
        fetchRequest()
    }, [])

    const fetchRequest = () => {
        setResponse(prevState => ({...prevState, loading: true}))
        axios.get<ResponseData>(`http://localhost:3000/?${ALL}&${SEMI_FIRST}&${LIMIT}`).then((response) => {
            setResponse({data: response.data, error: null, loading: false})
        }).catch(error => {
            setResponse({data: {current: ''}, error: error, loading: false})
        })
    }

    return response
}