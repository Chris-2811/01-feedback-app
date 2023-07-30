import React from 'react'

function Card({children, reverse}) {
  return (
    <div className='card'>{children}</div>
  )
}

export default Card