import React, { FC } from 'react'

import "./checkbox.scss"

interface ICheckbox {
    text?: string | null,
    disabled?: boolean,
    value: string,
    idFor: string,
    changeCheckbox(value: any): any,
    checked?: boolean
}

const Checkbox : FC<ICheckbox> = ({ text, checked= false, disabled = false, value, changeCheckbox, idFor, ...props }) => {
  return (
    <div className={`custom-checkbox ${ disabled ? 'custom-checkbox__disabled' : '' }`} {...props}>
        <input type="checkbox"
               value={value}
               onChange={(e) => changeCheckbox(e.target)}
               disabled={disabled}
               checked={checked}
               id={idFor} />
        <label htmlFor={idFor}>{ text }</label>
    </div>
  )
}

export default Checkbox;
