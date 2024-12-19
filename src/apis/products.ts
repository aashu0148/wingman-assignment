import { makeApiCall } from "./utility";

export async function getProducts() {
  const res = await makeApiCall({
    path: "https://dummyjson.com/products?limit=100",
    usePathAsUrl: true,
  });
  if (!res.data?.products?.length) return [];

  return res.data.products;
}
