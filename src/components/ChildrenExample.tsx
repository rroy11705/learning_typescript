import React from 'react'

type ChildrenExampleProps = { 
    children: React.ReactNode
}

const ChildrenExample = (props: ChildrenExampleProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default ChildrenExample