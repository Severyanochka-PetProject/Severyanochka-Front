import React, {FC, useCallback, useMemo} from 'react'
import SelectItem from '../../components/BasketComponents/SelectItem/SelectItem';
import Checkbox from '../../components/UI/Checkbox/Checkbox';

import './basketPage.scss';
import CustomButton from "../../components/UI/CustomButton/CustomButton";
import ErrorHint from "../../components/UI/ErrorHint/ErrorHint";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/index.js";
import {basketInitialState} from "../../store/types/basket";
import {SWITCH_AUTH_MODAL} from "../../store/reducers/modalSlice";
import useModal from "../../hooks/useModal";
import {ADD_SELECT_PRODUCTS, REMOVE_SELECT_PRODUCT} from "../../store/reducers/basketSlice";
import {removeProductFromBasket} from "../../store/actions/basket.action";

const TOTAL_BASKET : number = 1000

const BasketPage : FC = () => {
  const basket = useSelector<RootState, basketInitialState>(state => state.basket);
  const isAuth = useSelector<RootState, boolean>(state => state.user.isAuth);

  const dispatch = useDispatch();

  const toggleModal = useModal();

  const basketTotalWithoutDiscount = useCallback((): number => {
    const products = basket.products.filter(p => basket.selectedProductsId.includes(p.id_food));
    return Number(products.reduce((prev, current) => {
      return prev + (current.product.price * current.count)
    }, 0))
  }, [basket.selectedProductsId, basket.products])

  const basketTotalDiscount = useCallback((): number => {
    const products = basket.products.filter(p => basket.selectedProductsId.includes(p.id_food));

    return Number(products.reduce((prev, current) => {
      return Number(prev) + Number(current.product.discount || 0) * current.count
    }, 0))
  }, [basket.selectedProductsId, basket.products])

  const isActive = useMemo(() => {
    return TOTAL_BASKET < (basketTotalWithoutDiscount() - basketTotalDiscount())
  }, [basketTotalDiscount, basketTotalWithoutDiscount])

  const createOrder = useCallback(() => {
    if (!isAuth) {
      toggleModal(SWITCH_AUTH_MODAL, true, true);
    }
  }, [isAuth, toggleModal])

  const selectAll = (eventTarget: HTMLInputElement) => {
    if (eventTarget.checked) {
      let ids: number[] = [];

      basket.products.forEach(product => ids.push(product.id_food))

      dispatch(ADD_SELECT_PRODUCTS(ids));
    } else {
      dispatch(REMOVE_SELECT_PRODUCT([]));
    }
  }

  const removeAll = () => {
    const products = basket.products.filter(p => basket.selectedProductsId.includes(p.id_food));

    if (!products.length) {
      return;
    }

    products.forEach(p => {
      dispatch(removeProductFromBasket(p.id_food));
      dispatch(REMOVE_SELECT_PRODUCT(p.id_food));
    })
  }

  return (
      <div className="page basket-page">
        <main className="main">
          <div className="main__navigation">
            <h1>Корзина</h1>
            <p>{ basket.products.length }</p>
          </div>
          <div className="basket-page__body">
            {!!basket.products.length &&
              <div className="basket-page__top">
                <Checkbox checked={basket.products.length === basket.selectedProductsId.length} changeCheckbox={selectAll} value="selectAll" idFor="select-all" text="Выделить все"/>
                <div className={`basket-top-item select-delete ${ !basket.selectedProductsId.length ? 'select-delete_inactive' : '' }`}
                     onClick={removeAll}>
                  <p>Удалить выбранные</p>
                </div>
              </div>
            }
            <div className="basket-page__wrapper">
              <div className={`basket-page__section ${ !basket.products.length ? 'basket-page__section_empty' : '' }`}>
                {basket.products.length ? basket.products.map((item) => (
                    <SelectItem index={item.id_food} key={item.id_food} basketProduct={item}/>
                )) : <p>Вы не добавили ничего в корзину...</p>
                }
              </div>
              <div className="basket-page__aside">
                <div className="basket-page__bonus">
                  <p className="basket-page__text bonus-text">На карте накоплено 0 ₽ </p>
                </div>
                <span className="basket-page__line"/>
                <div className="basket-page__check">
                  <div className="check-item">
                    <p className="basket-page__text">{ basket.selectedProductsId.length } товара</p>
                    <p className="basket-page__text basket-page__text_black">{ basketTotalWithoutDiscount().toFixed(2) } ₽</p>
                  </div>
                  <div className="check-item bonus-item">
                    <p className="basket-page__text">Скидка</p>
                    <p className="basket-page__text basket-page__text_black">-{ basketTotalDiscount().toFixed(2) } ₽</p>
                  </div>
                </div>
                <span className="basket-page__line"/>
                <div className="basket-page__total">
                  <p className="basket-page__text">Итог</p>
                  <p className="basket-page__text basket-page__text_black">
                    { (basketTotalWithoutDiscount() - basketTotalDiscount()).toFixed(2) } ₽
                  </p>
                </div>
                <div className="info-button__bonus">
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M23.1883 6.66661H0.811961C0.343143 6.66661 -0.0396916 7.05823 0.0033005 7.52051C0.494639 13.0113 5.67826 17.3333 12.0001 17.3333C18.322 17.3333 23.5056 13.0133 23.997 7.52051C24.0379 7.05823 23.6571 6.66661 23.1883 6.66661Z"
                      fill="#70C05B"/>
                </svg>
              </span>
                  <p>Вы получаете <b>- бонусов</b></p>
                </div>
                <div className="basket-page__bottom">
                  {!isActive &&
                    <ErrorHint showTriangle={ false } message={`Минимальная сумма заказа ${ TOTAL_BASKET }руб.`}/>
                  }
                  <CustomButton disabled={ !isActive } onClick={createOrder}>
                    <span>Оформить заказ</span>
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export default BasketPage
