export const productAPI = {
  getProducts: async () => {
    try {
      const response = await fetch("/data/product.json", { method: "GET" });

      if (response.status !== 200) {
        throw Error("Ошибка запроса");
      }
      return await response.json();
    } catch (err) {
      console.log(`Ошибка: ${err}`);
    }
  },
};
