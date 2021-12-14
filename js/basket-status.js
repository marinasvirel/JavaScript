function basketStatus(){
  const basketBox = document.querySelector(".header-basket-box");
  const basketTitle = document.querySelector(".basket-box-title");
  if(basketBox.children.length > 0){
    basketTitle.innerText = "Ваш заказ";
  }
}