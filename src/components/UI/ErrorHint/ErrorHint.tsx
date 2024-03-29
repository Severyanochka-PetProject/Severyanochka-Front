import React, {FC} from 'react';

import './errorHint.scss';

interface IErrorHint {
    message: string,
    showTriangle?: boolean
}

const ErrorHint: FC<IErrorHint> = ({ message, showTriangle= true }) => {
    return (
        <div className="error-hint">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.5 11C0.5 5.20101 5.20101 0.5 11 0.5C16.799 0.5 21.5 5.20101 21.5 11C21.5 16.799 16.799 21.5 11 21.5C5.20101 21.5 0.5 16.799 0.5 11ZM11 1.5C5.75329 1.5 1.5 5.75329 1.5 11C1.5 16.2467 5.75329 20.5 11 20.5C16.2467 20.5 20.5 16.2467 20.5 11C20.5 5.75329 16.2467 1.5 11 1.5Z" fill="#F2F2F2"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M11 6.5C11.2761 6.5 11.5 6.72386 11.5 7V11C11.5 11.2761 11.2761 11.5 11 11.5C10.7239 11.5 10.5 11.2761 10.5 11V7C10.5 6.72386 10.7239 6.5 11 6.5Z" fill="#F2F2F2"/>
                <path d="M12 15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15C10 14.4477 10.4477 14 11 14C11.5523 14 12 14.4477 12 15Z" fill="#F2F2F2"/>
            </svg>
            <p className="error-hint__text">
                { message }
            </p>
            {showTriangle &&
                <img src="/images/UI/tooltip.svg" alt=""/>
            }
        </div>
    );
};

export default ErrorHint;
