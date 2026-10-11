let dialog = document.querySelector('dialog');
let gallery = document.querySelector('#gallery');
let dialogImage = dialog.querySelector("img");
let closeButton = dialog.querySelector('.close-viewer');

let menuButton = document.querySelector(".menu")

gallery.addEventListener('click', function(event) {
    if(event.target.src !== undefined) {
        dialogImage.src = event.target.src.replace("-sm", "-full");
        dialogImage.alt = event.target.alt;
        dialog.showModal();
    }
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

menuButton.addEventListener("click", function (e) {
    let nav = document.querySelector("nav");
    nav.style.display = nav.style.display === "" ? "flex" : "";
    menuButton.classList.toggle('change');
});
