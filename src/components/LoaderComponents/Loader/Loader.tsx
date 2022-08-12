import React, {FC} from 'react';

import './loader.scss';

interface ILoader {
    title?: string,
    className?: string
}

const Loader: FC<ILoader> = ({ title, className  }) => {
    return (
       <div className={`loader ${ className ? className : '' }`}>
           <div className="lds-ripple">
               <div></div>
               <div></div>
           </div>
           {title &&
            <p>{ title }</p>
           }
       </div>
    );
};

export default Loader;
