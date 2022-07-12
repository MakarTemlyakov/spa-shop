export const getMinPrice = (product) => {
  return Math.min(
    ...Object.values(product).map((sku) => {
      return Number(sku.PRICE);
    })
  );
};
