export const getDiscountedPricePercentege = (originalPrice, discuntedPrice) =>{
    const discount = originalPrice - discuntedPrice;

    const discountPercentage = (discount/originalPrice) * 100;
    return discountPercentage.toFixed(2)
};