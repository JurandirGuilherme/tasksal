'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { createContext } from 'react'

class LoadingType {
  isLoading!: boolean;
  setIsLoading!: React.Dispatch<React.SetStateAction<boolean>>
}
export const loadingContext = createContext<LoadingType>();

function LoadingContext({children}: React.PropsWithChildren) {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <loadingContext.Provider value={{isLoading, setIsLoading}}>{children}</loadingContext.Provider>
  )
}

export default LoadingContext