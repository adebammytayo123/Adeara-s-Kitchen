const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener("click", function () {
   
    links.classList.toggle('show-links')
});


// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", function () {
//     preloader.classList.add("hide-preloader");
// });

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thanks for contacting us, we will get back to you soon !")
})