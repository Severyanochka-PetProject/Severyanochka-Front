import React, {FC} from 'react';

import './customButton.scss';

interface ICustomButton {
    disabled: boolean,
    [key:string]: unknown
}

const CustomButton: FC<ICustomButton> = React.memo(({ disabled, children, ...props }) => {
    return (
        <button className="custom-button" disabled={disabled} {...props}>{ children}</button>
    );
});

export default CustomButton;
