import http from "../extras/http";

async function fetchHistoryProducts() {
  return await http.get("product/all/user");
}
export default fetchHistoryProducts;
