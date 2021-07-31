const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const root = document.documentElement;
const scrollElementsDisplayed = getComputedStyle(root).getPropertyValue("--scroll-elements-displayed");
const scrollContent = document.querySelector(".scroll-content");

root.style.setProperty("--scroll-elements", scrollContent.children.length);

for(let i = 0; i < scrollElementsDisplayed; i++) {
    scrollContent.appendChild(scrollContent.children[i].cloneNode(true));
}

navToggle.addEventListener("click", function () {
    // console.log(links.classList)
    // console.log(links.classList.contains('random'))
    // console.log(links.classList.contains('links'));

    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // }
    // else {
    //     links.classList.add('show-links')
    // }
    links.classList.toggle('show-links')
});


// const sponsors = [
//   {
//     id: 1,
//     name: "JUSTIN MOBOLAJI",
//     job: "Real Estate ",
//     img:
//       "./people/jimmy.jpg",
//     text:
//       "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//   },
//   {
//     id: 2,
//     name: "SHEKEMI JOHNSON",
//     job: "Professional Chef",
//     img:
//       "./people/Shekemi.jpg",
//     text:
//       "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
//   },
//   {
//     id: 3,
//     name: "JIMMY FOLAHANMI",
//     job: "Civil Engineer",
//     img:
//       "./people/john.jpg",
//     text:
//       "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
//   },
//   {
//     id: 4,
//     name: "BUKOLA AWOFIEBI",
//     job: "the boss",
//     img:
//       "./people/bukola.jpg",
//     text:
//       "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
//   },
// ];
// select items
// const img = document.getElementById("person-img");
// const sponsor = document.getElementById("sponsor");
// const job = document.getElementById("job");
// const info = document.getElementById("info");

// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const randomBtn = document.querySelector(".random-btn");

// set starting item
// let currentItem = 0;

// load initial item
// window.addEventListener("DOMContentLoaded", function () {
//   const item = sponsors[currentItem];
//   img.src = item.img;
//   sponsor.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// });

// show person based on item
// function showPerson(person) {
//   const item = sponsors[person];
//   img.src = item.img;
//   sponsor.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// }
// show next person
// nextBtn.addEventListener("click", function () {
//   currentItem++;
//   if (currentItem > sponsors.length - 1) {
//     currentItem = 0;
//   }
//   showPerson(currentItem);
// });
// show prev person
// prevBtn.addEventListener("click", function () {
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem = sponsors.length - 1;
//   }
//   showPerson(currentItem);
// });
// show random person
// randomBtn.addEventListener("click", function () {
//   console.log("hello");

//   currentItem = Math.floor(Math.random() * sponsors.length);
//   showPerson(currentItem);
// });

// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", function () {
//     preloader.classList.add("hide-preloader");
// });