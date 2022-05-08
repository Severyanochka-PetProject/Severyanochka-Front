import React, {FC} from 'react';

import './inputField.scss';

interface IInputField {
    title: string,
    [key: string]: unknown
}

const InputField : FC<IInputField> = ({title, ...props}) => {
    return (
        <div className="input-field">
            <p className="input-field__title">{ title }</p>
            <input type="text" {...props} />
        </div>
    );
};

export default InputField;
