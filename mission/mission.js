let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let text = document.querySelectorAll('h1, p, i, ol');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        body.classList.add('dark')
        }
    else {
        body.classList.remove('dark')
    }

    if (body.classList.contains('dark')) {
        logo.setAttribute("src", "https://wddbyui.github.io/wdd131/images/byui-logo-white.png");
            body.style.background = "#454545";
            for (let selector of text) {
                selector.style.color = "#ffffff";
            }
    }
    else {
        logo.setAttribute("src", "byui-logo-blue.webp");
            body.style.background = "#ffffff";
            for (let selector of text) {
                selector.style.color = "#000000";
            }
    }
}