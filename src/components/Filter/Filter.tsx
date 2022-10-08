import React from 'react'

import './filter.scss'

export const Filter = () => {
  return (
    <div className='custom-filter'>
        <div className="custom-filter__header">
            <p>Фильтр</p>
        </div>
        <div className="custom-filter__filter-range"></div>
        <div className="custom-filter__items"></div>
    </div>
  )
}
