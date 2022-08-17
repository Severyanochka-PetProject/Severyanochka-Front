import React, { FC } from 'react'

import "./checkbox.scss"

interface ICheckbox {
    text?: string | null,
    disabled?: boolean,
    value: string,
    idFor: string,
}

const Checkbox : FC<ICheckbox> = ({ text, disabled = false, value, idFor, ...props }) => {
  return (
    <div className={`custom-checkbox ${ disabled ? 'custom-checkbox__disabled' : '' }`} {...props}>
        <input type="checkbox" value={value} disabled={disabled} id={idFor} />
        <label htmlFor={idFor}>{ text }</label>
    </div>
  )
}

export default Checkbox;