import React from 'react';

const Form = ({ type, id, msg, onChange, formClass, isReq, icon, onClick }) => {

  return (
    <div>
      <div className={`form-floating ${formClass}`}>
        <div className="input-group">
          <input
            type={type}
            className="form-control"
            id={id}
            placeholder={msg}
            onChange={onChange}
          />
          {icon && (
            <span className="input-group-text" onClick={onClick}>
              <i className={icon}></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
