var searchButton = document.querySelector("#search-button");
var searchForm = document.querySelector(".search-form");
var buttonShowHotels = document.querySelector(".btn-show");

searchButton.addEventListener("click", function(evt) {
  evt.preventDefault(); // вызов метода с названием preventDefault на обьекте evt
  searchForm.classList.toggle("search-form-show"); // вызов метода с названием toggle на свойстве с названием classList переменной searchForm
});

buttonShowHotels.addEventListener("click", function(evt) {
  evt.preventDefault();
});
