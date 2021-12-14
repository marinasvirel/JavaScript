function calcPrice(){
  const basketItems = document.querySelectorAll(".basket-box-item");
  const totalPriceNum = document.querySelector(".basket-total-price");
  let totalPrice = 0;

  basketItems.forEach(function(item){
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".basket-box-price-num");

    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  })
  totalPriceNum.innerText = totalPrice;
}