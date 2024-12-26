import React, { useState, createContext } from 'react'

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  return (
    <Context.Provider value={{
      language,
      setLanguage
    }}>
      {children}
    </Context.Provider>
  )
}

export default Context