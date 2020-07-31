const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
//   console.log(sidebar.classList)
  sidebar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar")
})

const sponsors = [
  {
    id: 1,
    name: "justin smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/dvytythnk/image/upload/v1595920256/justin_tpbhbs.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "dorathy johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/dvytythnk/image/upload/v1595920405/woman-sitting-on-chair-inside-room-1367270_rfn8sl.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "jimmy jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/dvytythnk/image/upload/v1595920441/man-smiling-1605399_fnskvs.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "jane anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/dvytythnk/image/upload/v1595920526/jane_fnnh1c.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select items
const img = document.getElementById("person-img");
const sponsor = document.getElementById("sponsor");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = sponsors[currentItem];
  img.src = item.img;
  sponsor.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = sponsors[person];
  img.src = item.img;
  sponsor.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > sponsors.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = sponsors.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * sponsors.length);
  showPerson(currentItem);
});