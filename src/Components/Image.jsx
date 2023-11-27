import React from 'react'

const Image = ({src,alt,dg}) => {
  return (
    <img className={dg} src={src} alt={alt} />
  )
}

export default Image 