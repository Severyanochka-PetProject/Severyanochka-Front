import { Food } from "../../domain/Food.domain";

export interface productInitialState {
    products: Food[],
    length: number,
    isLoading: boolean
}