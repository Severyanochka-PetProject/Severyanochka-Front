import {IReviewsStatistic} from "../interfaces/ProductService.interface";

// FIXME
export const computedAvgRatingStars = (statisticPayload: IReviewsStatistic) => {
    let sum = 0;
    let val = 0;
    Object.keys(statisticPayload).forEach((key: string | number) => {
        if (statisticPayload[key as keyof IReviewsStatistic] !== 0) {
            val += statisticPayload[key as keyof IReviewsStatistic]
            sum += (Number(statisticPayload[key as keyof IReviewsStatistic]) * Number(key))
        }
    })

    return Math.floor(sum / val)
}
