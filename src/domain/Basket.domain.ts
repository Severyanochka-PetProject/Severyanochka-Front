import { Food } from './Food.domain';

export type Basket = {
    id_basket: number;
    count: number;
    id_user: number;
    id_food: number;
    products: Food[]
}

export function containsProductInBasket(product: Food, basket: Basket): boolean {
    console.log(basket?.products)
    if (!basket?.products.length) return false;

    return basket?.products.some(({ id_food }) => id_food === product.id_food);
}
