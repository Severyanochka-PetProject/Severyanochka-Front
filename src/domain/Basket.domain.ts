import { Food } from './Food.domain';

export type BasketProduct = {
    id_basket?: number;
    count: number;
    id_user: number;
    id_food: number;
    product: Food
}
