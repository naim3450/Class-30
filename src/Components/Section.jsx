import React from 'react'

const Section = ({children,className}) => {
  return (
    <section className={`${className}: bg-nav pt-[69px] pb-[100px]`}>{children}</section>
  )
}

export default Section