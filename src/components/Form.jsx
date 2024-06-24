import React from 'react';

const Form = ({ type, id, msg, onChange, formClass, isReq, icon, onClick }) => {

    return (
        <div>
            <div className={`form-floating ${formClass}`}>
                <input

                    type={type}
                    className="form-control"
                    id={id}
                    placeholder={msg}
                    onChange={onChange}

                />
                <button onClick={onClick} className={icon}></button>
                <label className="ms-2" htmlFor={id}>{msg}</label>
            </div>
        </div>
    )
}

export default Form;
