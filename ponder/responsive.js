// Grab the menu button HTML button and save to a variable.
let menuButton = document.querySelector(".menu-btn")

// add event listener to menuButton
// anonymous or nameless function
menuButton.addEventListener("click", function (e) {
    // grab a reference to the nav
    let nav = document.querySelector("nav");
    
    nav.style.display = nav.style.display === "" ? "flex" : "";

    menuButton.classList.toggle('change');
});
