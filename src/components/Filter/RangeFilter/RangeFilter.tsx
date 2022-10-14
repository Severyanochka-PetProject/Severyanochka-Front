import React, { useCallback, useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './rangeFilter.scss'

const MIN_PRICE = 0;
const MAX_PRICE = 10000;
const PUSHABLE_RANGE = 200;
const RANGE_STEP = 50;

export const RangeFilter = () => {
    const [rangeMinValue, setMinValue] = useState(MIN_PRICE);
    const [rangeMaxValue, setMaxValue] = useState(MAX_PRICE);

    const handlerChange = useCallback((data: any) => {
        setMinValue(data[0])
        setMaxValue(data[1]);
    }, [])

    const changeRangeInput = useCallback((event: any, rangeType: "MIN_PRICE" | "MAX_PRICE" ) => {
        const value = Number(event.target.value);

        if (isNaN(value) || value > MAX_PRICE || value < MIN_PRICE) {
            return
        }

        rangeType === "MIN_PRICE" ? setMinValue(value) : setMaxValue(value);
    }, [])

    const clearRangeFilter = useCallback(() => {
        setMinValue(MIN_PRICE)
        setMaxValue(MAX_PRICE)
    }, [])

    return (
        <div className='range-filter'>
            <div className="range-filter__top">
                <p className='range-filter__title'>Цена</p>
                <div className='range-filter__btn' onClick={clearRangeFilter}>
                    <p>Очистить</p>
                </div>
            </div>
            <div className="range-filter__controller">
                <div className="range-filter__wrapper">
                    <input className="range-filter__input" value={rangeMinValue} onChange={(e) => changeRangeInput(e, "MIN_PRICE")} />
                    <span className='range-filter__dash'>-</span>
                    <input className="range-filter__input" value={rangeMaxValue} onChange={(e) => changeRangeInput(e, "MAX_PRICE")} />
                </div>
                <div className="range-filter__range-controller">
                    <Slider 
                        range
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        value={[rangeMinValue,rangeMaxValue]}
                        allowCross={false}
                        step={RANGE_STEP}
                        onChange={handlerChange}
                        pushable={PUSHABLE_RANGE}
                    />
                </div>
            </div>
        </div>
    )
}
