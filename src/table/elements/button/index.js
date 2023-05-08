import React from 'react'
import './styles.css'

function Button({children, ...props}) {
  const {className:classes , ...rest} = props
  return (
    <button className={`nspira__t-btn-main ${classes}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
