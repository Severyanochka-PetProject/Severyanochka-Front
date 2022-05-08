import React, {FC} from 'react';

import './inputField.scss';

interface IInputField {
    title: string,
    onInput(value: string): any,
    [key: string]: unknown
}

const InputField : FC<IInputField> = ({title, onInput, ...props}) => {
    return (
        <div className="input-field">
            <p className="input-field__title">{ title }</p>
            <input onInput={(e) => onInput((e.target as HTMLInputElement).value)} type="text" {...props} />
        </div>
    );
};

export default InputField;
