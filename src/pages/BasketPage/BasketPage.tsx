import React, { FC } from 'react'
import SelectItem from '../../components/BasketComponents/SelectItem/SelectItem';
import Checkbox from '../../components/UI/Checkbox/Checkbox';

import './basketPage.scss';
import CustomButton from "../../components/UI/CustomButton/CustomButton";
import ErrorHint from "../../components/UI/ErrorHint/ErrorHint";

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
          <Checkbox value="selectAll" idFor="select-all" text="Выделить все" />
          <div className="basket-top-item select-delete">
            <p>Удалить выбранные</p>
          </div>
        </div>
        <div className="basket-page__wrapper">
          <div className="basket-page__section">
            {[1, 2, 3, 4].map((value) => (
                <SelectItem index={value} />
              ))
            }
          </div>
          <div className="basket-page__aside">
            <div className="basket-page__bonus">
              <p className="basket-page__text bonus-text">На карте накоплено 200 ₽ </p>
            </div>
            <span className="basket-page__line"></span>
            <div className="basket-page__check">
              <div className="check-item">
                <p className="basket-page__text">3 товара</p>
                <p className="basket-page__text basket-page__text_black">258,10 ₽</p>
              </div>
              <div className="check-item bonus-item">
                <p className="basket-page__text">Скидка</p>
                <p className="basket-page__text basket-page__text_black">-8,01  ₽</p>
              </div>
            </div>
            <span className="basket-page__line"></span>
            <div className="basket-page__total">
              <p className="basket-page__text">Итог</p>
              <p className="basket-page__text basket-page__text_black">258,10 ₽</p>
            </div>
            <div className="info-button__bonus">
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.1883 6.66661H0.811961C0.343143 6.66661 -0.0396916 7.05823 0.0033005 7.52051C0.494639 13.0113 5.67826 17.3333 12.0001 17.3333C18.322 17.3333 23.5056 13.0133 23.997 7.52051C24.0379 7.05823 23.6571 6.66661 23.1883 6.66661Z" fill="#70C05B"/>
                </svg>
              </span>
              <p>Вы получаете <b>10 бонусов</b></p>
            </div>
            <div className="basket-page__bottom">
              <ErrorHint message={'Минимальная сумма заказа 1000р'} />
              <CustomButton disabled={true}>
                <span>Оформить заказ</span>
              </CustomButton>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default BasketPage