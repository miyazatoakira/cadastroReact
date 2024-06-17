import React from 'react'

const Checkbox = ({value, id, msg, checkboxClass, type}) => {
  return (
    <div>
      <div className={`form-check ${checkboxClass}`}>
        <input className="form-check-input" type={type} value={value} id={id} />
        <label className="form-check-label" htmlFor={id}>{msg}</label>
      </div>
    </div>
  )
}

export default Checkbox;