import React from 'react'

const Button = ({text,href,dg}) => {
  return (
    <button className={dg}><a href={href}>{text}</a></button>
  )
}

export default Button