import { useState } from 'react'

export const LOCAL_STORAGE_DATA = {
  KEY: 'kankenApp_repeatItemID'
}

export const saveJSON = (key: string, data: string): void => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const removeJSON = (key: string): void => {
  localStorage.removeItem(key)
}

export const useDeleteAll = () => {
  const [isDeleteAll, setIsDeleteAll] = useState<boolean>(false)

  const deleteAll = () => {
    for (const key in localStorage) {
      if (key.startsWith(LOCAL_STORAGE_DATA.KEY)) {
        localStorage.removeItem(key)
      }
    }
    setIsDeleteAll(true)
  }
  return { deleteAll, isDeleteAll}
}
