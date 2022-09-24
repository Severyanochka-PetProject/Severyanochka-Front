export const computedDiscountPercent = (price: number, discount: number | null) => {
    if (!discount) {
        return 0
    }

    return (discount * 100 / price).toFixed(0);
}
