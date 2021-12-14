// Открыть-закрыть корзину
const basketBtn = document.querySelector(".header-basket-btn");
const basketBox = document.querySelector(".header-basket-box");

basketBtn.addEventListener("click", function () {
  basketBox.classList.toggle("active");
});


// Отслеживаем клик на странице
window.addEventListener("click", function (event) {
  // Проверяем бы ли совершен клик по кнопке "Добавить в корзину"
  if (event.target.hasAttribute("data-cart")) {
    basketStatus()
    // Находим карточку товара, внутри которой был совершен клик
    const card = event.target.closest(".catalog-item");
    // Находим внешний счетчик корзины
    const meter = document.querySelector(".header-external-meter");
    // Увеличиваем внешний счетчик на единицу
    meter.innerText = ++meter.innerText;
    // Собираем данные карточки и описываем их в виде объекта
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".catalog-img").getAttribute("src"),
      title: card.querySelector(".catalog-item-title").innerText,
      text: card.querySelector(".catalog-item-text").innerText,
      price: card.querySelector(".catalog-price-num").innerText,
    };
    // Проверяем есть ли товар с определенными данными в корзине
    const itemInCart = basketBox.querySelector(`[data-id="${productInfo.id}"]`);
    // Если есть, то...
    if (itemInCart) {
      console.log(itemInCart);
      let child = itemInCart.querySelector('.basket-box-num');
      console.log(++child.textContent);
      // Собранные данные подставляем в шаблон корзины
    } else {
      const cartItemHTML = `<li class="basket-box-item" data-id="${productInfo.id}">
      <img class="basket-box-img" src="${productInfo.imgSrc}" alt="" />
      <div class="basket-box-content">
        <div class="basket-box-list-title catalog-item-title">
        ${productInfo.title}
        </div>
        <div class="basket-box-text catalog-item-text">
        ${productInfo.text}
        </div>
        <div class="basket-box-price catalog-item-price">Цена: $ 
          <span class="basket-box-price-num">${productInfo.price}</span>
        </div>
        <div class="basket-box-counter">
          <span class="basket-box-plus" data-action="plus">+</span>
          <span class="basket-box-num" data-counter>1</span>
          <span class="basket-box-minus" data-action="minus">-</span>
        </div>
      </div>
    </li>`;
    // Отображаем товар в корзине
      basketBox.insertAdjacentHTML("beforeend", cartItemHTML);
    }
    calcPrice()
  }
});
