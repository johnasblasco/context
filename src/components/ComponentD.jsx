import React, { useContext } from 'react'
import { UserContext } from './ComponentA.jsx'

const ComponentD = () => {

      const [user, age] = useContext(UserContext);

      return (
            <div className='border-4 border-black p-[25px]'>
                  <h1>ComponentD</h1>
                  <p>{user}</p>
                  <p>{age}</p>
            </div>
      )
}

export default ComponentD