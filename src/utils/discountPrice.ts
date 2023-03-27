export default function DiscountPrice(price, percentageDiscount) {
  const discountPrice =
    Math.round((price - (percentageDiscount / 100) * price) * 10) / 10;
  return discountPrice;
}
