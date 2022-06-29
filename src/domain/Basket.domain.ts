import { Food } from './Food.domain';

export type Basket = {
    id_basket: number;
    count: number;
    products: Food[]
}

export function contains(product: Food, basket: Basket): boolean {
    return basket.products.some(({ id_food }) => id_food === product.id_food);
}