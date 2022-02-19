const fetchJSON = async (url) => {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return response;
};

export const getProducts = (append) => {
  return fetchJSON(
    append
      ? `https://fakestoreapi.com/${append}`
      : "https://fakestoreapi.com/products"
  );
};
