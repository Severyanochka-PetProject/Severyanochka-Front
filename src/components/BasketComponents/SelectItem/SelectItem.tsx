import React, {FC} from 'react'
import Checkbox from '../../UI/Checkbox/Checkbox'

import './selectItem.scss'
import {computedDiscountPercent} from "../../../helper/price.helper";
import {useNavigate} from "react-router-dom";
import {BasketProduct} from "../../../domain/Basket.domain";
import {useDispatch} from "react-redux";
import {removeProductFromBasket, updateBasketProduct} from "../../../store/actions/basket.action";

interface ISelectItem {
    index: number,
    basketProduct: BasketProduct
}

const SelectItem : FC<ISelectItem> = ({ index, basketProduct }) => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const goToProduct = () => {
        navigation(`/product?id=${basketProduct.product.id_food}`)
    }

    const updateProduct = (updatedBasketProduct: BasketProduct) => {
        if (updatedBasketProduct.count === 0) {
            dispatch(removeProductFromBasket(updatedBasketProduct.id_food));
        } else {
            dispatch(updateBasketProduct(updatedBasketProduct));
        }
    }

    const updateCount = (value: number) => {
        let updatedBasketProduct = {...basketProduct};
        updatedBasketProduct.count  = updatedBasketProduct.count + value;

        updateProduct(updatedBasketProduct);
    }

    return (
        <div className="select-item">
            <Checkbox value={index.toString()} idFor={index.toString()} />
            <div className="select-item__img">
                <img src={basketProduct.product.url} alt={basketProduct.product.name} />
            </div>
            <div className="select-item__info">
                <p className="select-item__name" onClick={goToProduct}>{ basketProduct.product.name }</p>
                <small>
                    <span>{ basketProduct.product.price } ₽</span> за шт.
                    {basketProduct.product.discount &&
                        <div className="select-item__discount">- { computedDiscountPercent(basketProduct.product.price, basketProduct.product.discount) }%</div>
                    }
                </small>
            </div>
            <div className="select-item__wrapper">
                <div className="select-item__block">
                    <div className="select-item__controller">
                        <p onClick={() => updateCount(-1)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="white"/>
                            </svg>
                        </p>
                        <div>{ basketProduct.count }</div>
                        <p onClick={() => updateCount(+1)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="white"/>
                            </svg>
                        </p>
                    </div>
                </div>
                <div className="select-item__price">
                    <p>{ basketProduct.product.price - (basketProduct.product.discount || 0) } ₽</p>
                    {basketProduct.product.discount &&
                        <small><s>{ basketProduct.product.price } ₽</s></small>
                    }
                </div>
            </div>
        </div>
    )
}

export default SelectItem
