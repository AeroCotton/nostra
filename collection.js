var productContainer = document.querySelector("#product");
var search = document.getElementById("search");
var noResults = document.getElementById("no-results");
var productlist = productContainer.querySelectorAll(".pro-card");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();
    var matchFound = false;

    for (var count = 0; count < productlist.length; count++) {
        var productName = productlist[count].querySelector(".desktop-p").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
            matchFound = true;
        }
    }

    // Show or hide the "No results found" message
    if (matchFound) {
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }
});