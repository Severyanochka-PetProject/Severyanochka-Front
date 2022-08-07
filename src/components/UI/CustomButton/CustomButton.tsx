import React, {FC} from 'react';

import './customButton.scss';

interface ICustomButton {
    name: string,
    disabled: boolean,
    [key:string]: unknown
}

const CustomButton: FC<ICustomButton> = React.memo(({name, disabled, ...props }) => {
    return (
        <button className="custom-button" disabled={disabled} {...props}>{ name }</button>
    );
});

export default CustomButton;
