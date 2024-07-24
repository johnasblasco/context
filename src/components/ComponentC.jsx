import React, { useContext } from 'react'
import { UserContext } from './ComponentA.jsx'
import ComponentD from './ComponentD'
const ComponentC = () => {

      const user = useContext(UserContext)

      return (
            <div className='border-4 border-black p-[25px]'>

                  <h1>ComponentC</h1>

                  <p>{user}</p>
                  <ComponentD />


            </div>
      )
}

export default ComponentC