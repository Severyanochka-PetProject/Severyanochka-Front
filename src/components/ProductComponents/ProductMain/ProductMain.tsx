import React, {FC, useCallback} from 'react'
import { Food } from '../../../domain/Food.domain'

import { computedDiscountPercent } from '../../../helper/price.helper';

import CustomButton from '../../UI/CustomButton/CustomButton'

import './productMain.scss'

import {useSelector} from "react-redux";
import {RootState} from "../../../store/index.js";
import useAddToBasket from "../../../hooks/useAddToBasket";
import {basketInitialState} from "../../../store/types/basket";

interface IProductMain {
    product: Food
}

const ProductMain: FC<IProductMain> = React.memo(({ product, ...props }) => {
    const basket = useSelector<RootState, basketInitialState>(state => state.basket)

    const addToBasket = useAddToBasket();

    const containsProductInBasket = useCallback(() => {
        return basket.products.some(({ id_food }) => id_food === product.id_food);
    }, [basket.products, product.id_food])

  return (
    <div className="product-page-main">
        <div className="product-page-main__banner">
            {(product.discount && Number(product.discount) !== 0) &&
                <p className="banner-text">-{  computedDiscountPercent(product.price, product.discount) }%</p>
            }
            <div className="banner-image">
                <img src={product.url} alt="" />
            </div>
        </div>
        <div className="product-page-main__info">
            <div className="info-price">
                <div className="info-price__left">
                    <p className="info-price__value">{ product.price } ₽</p>
                    <small>Обычная цена</small>
                </div>
                <div className="info-price__right">
                    <p className="info-price__value info-price__value_bold">
                        { product.discount && Number(product.discount) !== 0 ?  product.price - product.discount : '-'} ₽
                    </p>
                    <small>С картой Северяночки</small>
                </div>
            </div>
            <div className="info-button">
                <CustomButton onClick={() => addToBasket(product)} disabled={false}>
                    {containsProductInBasket() ?
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M27.1374 8.86177C27.3978 9.12212 27.3978 9.54423 27.1374 9.80458L12.4708 24.4712C12.2104 24.7316 11.7883 24.7316 11.5279 24.4712L4.86128 17.8046C4.60093 17.5442 4.60093 17.1221 4.86128 16.8618C5.12163 16.6014 5.54374 16.6014 5.80409 16.8618L11.9993 23.057L26.1946 8.86177C26.455 8.60142 26.8771 8.60142 27.1374 8.86177Z" fill="white"/>
                        </svg>
                        :
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.33337 28C7.33337 26.1591 8.82576 24.6667 10.6667 24.6667C12.5077 24.6667 14 26.1591 14 28C14 29.841 12.5077 31.3333 10.6667 31.3333C8.82576 31.3333 7.33337 29.841 7.33337 28ZM10.6667 26C9.56214 26 8.66671 26.8954 8.66671 28C8.66671 29.1046 9.56214 30 10.6667 30C11.7713 30 12.6667 29.1046 12.6667 28C12.6667 26.8954 11.7713 26 10.6667 26Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.3334 28C23.3334 26.1591 24.8258 24.6667 26.6667 24.6667C28.5077 24.6667 30 26.1591 30 28C30 29.841 28.5077 31.3333 26.6667 31.3333C24.8258 31.3333 23.3334 29.841 23.3334 28ZM26.6667 26C25.5621 26 24.6667 26.8954 24.6667 28C24.6667 29.1046 25.5621 30 26.6667 30C27.7713 30 28.6667 29.1046 28.6667 28C28.6667 26.8954 27.7713 26 26.6667 26Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.33329 0.666672C0.965103 0.666672 0.666626 0.965149 0.666626 1.33334C0.666626 1.70153 0.965103 2.00001 1.33329 2.00001H6.10731C7.11706 7.72197 8.13773 13.4191 8.99904 19.1611C9.2438 20.7929 10.6455 22 12.2955 22H25.8129C27.4018 22 28.7698 20.8785 29.0815 19.3204L31.0004 9.72557C31.2479 8.48799 30.3014 7.33334 29.0393 7.33334H9.54725C9.1433 7.33334 8.77059 7.45202 8.45911 7.65458L7.32315 1.21748C7.26693 0.89891 6.99012 0.666672 6.66663 0.666672H1.33329ZM8.88795 9.43223C8.82749 9.02916 9.13967 8.66667 9.54725 8.66667H29.0393C29.46 8.66667 29.7755 9.05155 29.693 9.46408L27.774 19.0589C27.587 19.9938 26.7662 20.6667 25.8129 20.6667H12.2955C11.3055 20.6667 10.4645 19.9424 10.3176 18.9634L8.88795 9.43223Z" fill="white"/>
                        </svg>
                    }
                    <p>{ containsProductInBasket() ? 'Добавлено' : 'В Корзину' }</p>
                </CustomButton>
                <div className="info-button__bonus">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.1883 6.66661H0.811961C0.343143 6.66661 -0.0396916 7.05823 0.0033005 7.52051C0.494639 13.0113 5.67826 17.3333 12.0001 17.3333C18.322 17.3333 23.5056 13.0133 23.997 7.52051C24.0379 7.05823 23.6571 6.66661 23.1883 6.66661Z" fill="#70C05B"/>
                        </svg>
                    </span>
                    <p>Вы получаете <b>10 бонусов</b></p>
                </div>
            </div>
            <div className="info-table">
                <table>
                    <tbody>
                        <tr>
                            <td>Бренд</td>
                            <td className='bold'>{ product.brand?.name }</td>
                        </tr>
                        <tr>
                            <td>Страна производителя</td>
                            <td className='bold'>{ product.manufacture?.name }</td>
                        </tr>
                        <tr>
                            <td>Упаковка</td>
                            <td className='bold'>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {product.description &&
                <div className="info-description">
                    <small>Описание:</small>
                    <p>{product.description}</p>
                </div>
            }
        </div>
    </div>
  )
});

export default ProductMain;
