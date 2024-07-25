import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext()


const ComponentA = () => {

      const [user, setUser] = useState("Johnas")
      const [age, setAge] = useState(20)

      const UserContextValue = [user, age]



      return (
            <div className='border-4 border-black p-[25px]'>

                  <h1>ComponentA</h1>
                  <p className='text-sm font-light italic'>{`Hello ${user}`}</p>

                  {/* UseContext */}
                  <UserContext.Provider value={UserContextValue}>
                        <ComponentB />
                  </UserContext.Provider>

            </div>
      )
}

export default ComponentA