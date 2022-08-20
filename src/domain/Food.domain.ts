import { Brand } from "./Brand.domain";
import { Category } from "./Category.domain";
import { Manufacture } from "./Manufacture.domain";

export type Food = {
    id_food: number;
    name: string;
    description: string | null;
    price: number;
    discount: number | null;
    url: string;
    id_brand: number;
    id_manufacture: number;
    id_category: number;
    category?: Category,
    brand?: Brand,
    manufacture?: Manufacture
}
