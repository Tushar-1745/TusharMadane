import React from 'react'
import visem from '../docs/visem.jpeg'

function Documents() {
  return (
    <div >
        <div>
            <h3>6th sem result</h3>
            <img style={{height:'400px', width:'400px', objectFit:'contain'}} src={visem} alt="" />
        </div>
    </div>
  )
}

export default Documents