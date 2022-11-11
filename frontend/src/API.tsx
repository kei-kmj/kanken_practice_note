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

export enum Level {
    SEMI_FIRST = "11",
    FIRST = "1",
}

export enum Category {
    ALL = "",
    READING = "1",
    RARE_READING = "2",
    WRITING = "3",
    WRITING_IDIOM = "4",
    MEANING_IDIOM = "5",
    HISTORICAL_IDIOM = "6",
    SYNONYMS_OR_ANTONYMS = "7"
}

export enum Limit {
    TEN = "10"
}

export const useFetchApi = (level: Level, category: Category, limit: Limit) => {
    const [response, setResponse] = useState<Response>({data: {current: ''}, error: null, loading: false})


    useEffect(() => {
        fetchRequest(level, category, limit)
    }, [])

    const fetchRequest = (level: Level, category: Category,limit:Limit) => {
        setResponse(prevState => ({...prevState, loading: true}))
        axios.get<ResponseData>(`http://localhost:3000/?&category=${category}&level=${level}&limit=${limit}`).then((response) => {
            setResponse({data: response.data, error: null, loading: false})
        }).catch(error => {
            setResponse({data: {current: ''}, error: error, loading: false})
        })
    }

    return response
}