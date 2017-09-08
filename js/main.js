var searchButton = document.querySelector("#search-button");
var searchForm = document.querySelector(".search-form");
var formIn = searchForm.querySelector("#calendar-in");
var formOut = searchForm.querySelector("#calendar-out");
var formAdult = searchForm.querySelector("#adult");
var formChild = searchForm.querySelector("#child");

var storageAdult = localStorage.getItem("adult");
var storageChild = localStorage.getItem("child");

if (storageAdult) {
  formAdult.value = storageAdult;
}
if (storageChild) {
   formChild.value = storageChild;
}

searchButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (searchForm.classList.contains("search-form-show")) {
    searchForm.classList.remove("search-form-show");
    searchForm.classList.remove("search-form-error");
  } else {
    searchForm.classList.add("search-form-show");
  }
});

searchForm.addEventListener("submit", function(evt) {
  if (!formIn.value || !formOut.value || !formAdult.value || !formChild.value) {
    evt.preventDefault();
    searchForm.classList.remove("search-form-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("search-form-error");
  } else {
    localStorage.setItem("adult", formAdult.value);
    localStorage.setItem("child", formChild.value);
  }
});
