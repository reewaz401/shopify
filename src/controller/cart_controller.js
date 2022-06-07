import http from "../extras/http";

async function sendPurchaseDetail(body) {
  //posting to user product
  return await http.post("product/post/user", JSON.parse(body));
}

async function requestToCheckout(store) {
  let products = JSON.stringify(store.getters.cartItems);
  let response;
  await sendPurchaseDetail(products)
    .then((rows) => {
      let isDone = rows.data["status"] == 200 ? true : false;
      //for button to display if complete
      if (isDone) {
        store.commit("removeAll"); //remove every product from store and localstorage
        response = true;
      } else {
        response = false;
      }
    })
    .catch((err) => {
      console.log("Error in requestToCheckout" + err);
      response = false;
    });
  return response;
}
export default requestToCheckout;
