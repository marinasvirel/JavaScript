// Добавляем прослушку на всем окне
window.addEventListener("click", function(event){
  // Проверяем является ли элемент кнопкой плюс
  if(event.target.dataset.action === "plus"){
    // Находим обертку счетчика
    const counterWrapper = event.target.closest(".basket-box-counter");
    // Находим див с числом счетчика
    const counter = counterWrapper.querySelector("[data-counter]");
    // Увеличиваем на единицу
    counter.innerText = ++counter.innerText;
  }
  
  // Проверяем является ли элемент кнопкой минус
  if(event.target.dataset.action === "minus"){
    counterWrapper = event.target.closest(".basket-box-counter");
    counter = counterWrapper.querySelector("[data-counter]");
    if(+counter.innerText > 1){
      // Если больше 1, то уменьшаем на единицу
      counter.innerText = --counter.innerText;
    } else if(event.target.closest(".header-basket-box") && parseInt(counter.innerText) === 1){
      event.target.closest(".basket-box-item").remove();
    }
  }
  if(event.target.hasAttribute("data-action")){
    calcPrice();
  }
});



window.addEventListener("click", function(event){
  // Проверяем является ли элемент кнопкой плюс
  if(event.target.dataset.action === "plus"){
    // Находим див с числом внешнего счетчика
    const meter = document.querySelector(".header-external-meter");
    // Увеличиваем на единицу
    meter.innerText = ++meter.innerText;
  }
  
  // Проверяем является ли элемент кнопкой минус
  if(event.target.dataset.action === "minus"){
    const meter = document.querySelector(".header-external-meter");
    if(+meter.innerText > 0){
      // Если больше 1, то уменьшаем на единицу
      meter.innerText = --meter.innerText;
    }
  }
});