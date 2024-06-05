import React, { createContext, useState } from 'react'

export const UserContext= createContext()

const MyContext = (props) => {

const [isOpend, setIsOpend] =useState()

    
const ContextValues ={
 isOpend,setIsOpend
}

  return (
    <UserContext.Provider value={ContextValues} >
        {props.children}
    </UserContext.Provider>
  )
}

export default MyContext
