import React from 'react'

const Checkbox = ({value, id, msg, checkboxClass}) => {
  return (
    <div>
      <div className={`form-check ${checkboxClass}`}>
        <input className="form-check-input" type="checkbox" value={value} id={id} />
        <label className="form-check-label" htmlFor={id}>{msg}</label>
      </div>
    </div>
  )
}

export default Checkbox;