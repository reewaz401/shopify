import http from "../extras/http";

async function fetchAllProducts() {
  return await http.get("product/all");
}

export default fetchAllProducts;
