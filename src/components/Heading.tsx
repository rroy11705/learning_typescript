import React from 'react'

type ChildrenExampleProps = { 
    children: React.ReactNode
}

const Heading = (props: ChildrenExampleProps) => {
  return (
    <h1>{props.children}</h1>
  )
}

export default Heading