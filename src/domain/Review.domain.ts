import {Food} from "./Food.domain";

export type Review = {
    id_review: number,
    date: Date,
    text: string,
    stars: number,
    id_user: number,
    id_food: number,
    product: Food
}
