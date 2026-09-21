// how to manipulate the DOM with JavaScript

// Grab our h1 from the page
let heading = document.querySelector("h1");
//let heading = document.querySelectorAll("h1")[1];

console.log(heading);

// change the text of the element
heading.textContent = "Changed the heading to something else!"; 

// change the text color
heading.style.color = "#0000ff";

// pick your own style and change it
heading.style.textDecoration = "underline";

// retrieve an ID element from the page
document.getElementById("topics").style.color = "red";
//same thing
document.querySelector("#topics").style.color = "red";

// select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute("src", "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Disc_golf_WTDGC_Varazdin_Croatia_08.jpg/500px-Disc_golf_WTDGC_Varazdin_Croatia_08.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail");



let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                