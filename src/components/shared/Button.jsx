import React from 'react'

function Button({type, version, isDisabled, children}) {
  return (
    <button disabled={isDisabled} className={`btn btn-${version}`} type={type}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'button', 
    version: 'primary', 
    isDisabled: 'false'
}

export default Button