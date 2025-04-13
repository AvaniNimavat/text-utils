import React from 'react'

export default function Alert(props) {
  return (
   props.alert && <div class={`alert alert-${props.alert.type}  fade show`} role="alert">
    {props.alert.type} : {props.alert.message}
  </div>
  )
}
