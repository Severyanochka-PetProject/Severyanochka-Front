import { AxiosResponse } from "axios";
import { Category } from "../domain/Category.domain";

export interface CategoriesServiceInterface {
    /**
     *  Получение списка категорий
     */
    getCategories(): Promise<AxiosResponse<Category[]>>;
}