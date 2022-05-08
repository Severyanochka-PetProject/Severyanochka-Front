import React, {FC} from 'react';

import './borderButton.scss';

interface IBorderButton {
    text: string,
    [key: string]: unknown
}

const BorderButton: FC<IBorderButton> = ({text, ...props}) => {
    return (
        <div className="border-button" {...props}>
            <p>{ text }</p>
        </div>
    );
};

export default BorderButton;
