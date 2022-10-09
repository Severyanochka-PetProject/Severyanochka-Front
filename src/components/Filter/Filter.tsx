import React from 'react'
import CustomButton from '../UI/CustomButton/CustomButton'

import './filter.scss'
import { RangeFilter } from './RangeFilter/RangeFilter'

export const Filter = () => {
  return (
    <div className='custom-filter'>
        <div className="custom-filter__header">
            <p>Фильтр</p>
        </div>
        <div className="custom-filter__filter-range">
          <RangeFilter />
        </div>
        <div className="custom-filter__items"></div>
        <div className="custom-filter__btn">
          <CustomButton disabled={true}>Применить</CustomButton>
        </div>
    </div>
  )
}
