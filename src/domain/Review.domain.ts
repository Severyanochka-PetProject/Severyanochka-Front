import {Food} from "./Food.domain";
import { User } from "./User.domain";

export type Review = {
    id_review?: number,
    date: string| number,
    text: string,
    stars: number | null,
    id_user: number,
    id_food: number,
    product: Food,
    user: User
}
