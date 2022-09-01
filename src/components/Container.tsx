import React from 'react'

type ContainerProps = {
    styles: React.CSSProperties
}

const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>This is a simple text.</div>
  )
}

export default Container