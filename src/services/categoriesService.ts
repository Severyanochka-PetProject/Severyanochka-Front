import { AxiosResponse } from "axios";
import { CategoriesServiceInterface } from "../interfaces/CategoriesService.interface";

import api from "../api/axios";
import { Category } from "../domain/Category.domain";

class CategoriesService implements CategoriesServiceInterface {
    
    async getCategories(): Promise<AxiosResponse<Category[]>> {
        return await api.get('/product-apiV1/categories');
    }
}

export default new CategoriesService();