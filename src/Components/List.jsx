import React from 'react'

const List = ({text,href,dg}) => {
  return (
    <>
    <li className={dg}><a href={href}>{text}</a></li>
    </>
    )
}

export default List