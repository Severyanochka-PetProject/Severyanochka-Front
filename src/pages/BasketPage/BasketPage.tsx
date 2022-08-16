import React, { FC } from 'react'
import SelectItem from '../../components/BasketComponents/SelectItem/SelectItem';

import './basketPage.scss';

const BasketPage : FC = () => {
  return (
    <div className="page basket-page">
      <main className="main">
        <div className="main__navigation">
          <h1>Корзина</h1>
          <p>0</p>
        </div>
        <div className="basket-page__body">
        <div className="basket-page__top">
          <div className="basket-top-item select-all">
            <div className="select-all__icon">
              <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00001C0 0.81591 0.149238 0.666672 0.333333 0.666672H9.66667C9.85076 0.666672 10 0.81591 10 1.00001C10 1.1841 9.85076 1.33334 9.66667 1.33334H0.333333C0.149238 1.33334 0 1.1841 0 1.00001Z" fill="white"/>
              </svg>
            </div>
            <p>Выделить всё</p>
          </div>
          <div className="basket-top-item select-delete">
            <p>Удалить выбранные</p>
          </div>
        </div>
        <div className="basket-page__wrapper">
          <div className="basket-page__section">
            <SelectItem />
            <SelectItem />
            <SelectItem />
            <SelectItem />
          </div>
          <div className="basket-page__aside"></div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default BasketPage