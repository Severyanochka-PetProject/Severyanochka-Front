import React, {FC, useState} from 'react'
import Checkbox from '../../UI/Checkbox/Checkbox'

import './selectItem.scss'

interface ISelectItem {
    index: number
}

const SelectItem : FC<ISelectItem> = ({ index }) => {
    const [count, setCount] = useState<number>(1);

    return (
        <div className="select-item">
            <Checkbox value={index.toString()} idFor={index.toString()} />
            <div className="select-item__img">
                <img src="https://storage.yandexcloud.net/severyanochka-fs/products/prostokvashino-batter.png" alt="" />
            </div>
            <div className="select-item__info">
                <p className="select-item__name">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                <small>
                    <span>44,50 ₽</span> за шт.
                    <div className="select-item__discount">-10%</div>
                </small>
            </div>
            <div className="select-item__block">
                <div className="select-item__controller">
                    <p onClick={() => setCount(count - 1)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="white"/>
                        </svg>
                    </p>
                    <div>{ count }</div>
                    <p onClick={() => setCount(count + 1)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="white"/>
                        </svg>
                    </p>
                </div>
            </div>
            <div className="select-item__price">
                <p>80,10 ₽</p>
                <small><s>89,00 ₽</s></small>
            </div>
        </div>
    )
}

export default SelectItem
