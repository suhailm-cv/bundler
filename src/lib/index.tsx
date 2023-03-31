import React from 'react'

type Props = {
  greetee?: string
}

export default function HelloWorld(props:Props) {
  const {
    greetee = 'World'
  } = props

  return (
    <div>Hello, {greetee}!</div>
  )
}
