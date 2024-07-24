import React from 'react'
import ComponentC from './ComponentC'
const ComponentB = () => {
      return (
            <div className='border-4 border-black p-[25px]'>

                  <h1>ComponentB</h1>
                  <ComponentC />
            </div>
      )
}

export default ComponentB