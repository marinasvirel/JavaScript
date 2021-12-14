// Открыть-закрыть меню
const headerMenuBtn = document.querySelector(".header-menu-btn");
const headerMenuOpen = document.querySelector(".header-menu-open");

headerMenuBtn.addEventListener("click", function(){
  headerMenuOpen.classList.toggle("active");
});

// Открыть-закрыть субменю
const subTilles = document.querySelectorAll(".header-menu-list-title");
const subItems = document.querySelectorAll(".header-submenu");

subTilles.forEach(function(item){
  item.addEventListener("click", function(){
    let currentTitle = item;
    let tabId = currentTitle.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    
    subItems.forEach(function(){
      currentTab.classList.toggle("active")
    });
  });
});