const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

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


const menu = [
    {
      id: 1,
      title: "Protein Shakes",
      category: "shakes",
      price: 15.99,
      img: "./images/protein-shakes.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      order: "Order"
    },
    {
      id: 2,
      title: "diner double",
      category: "breakfast",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      order: "Order"
    },
    {
      id: 3,
      title: "Shrimp Pasta",
      category: "breakfast",
      price: 13.99,
      img: "./Foods/pasta.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      order: "Order"
    },
    {
      id: 4,
      title: "Egg Salad",
      category: "breakfast",
      price: 13.99,
      img: "./Foods/salad.png",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      order: "Order"
    },
    {
      id: 5,
      title: "London Shakes",
      category: "shakes",
      price: 6.99,
      img: "./images/london-shakes.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      order: "Order"
    },
    {
      id: 6,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      order: "Order"
    },
    {
      id: 7,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      order: "Order"
    },
    {
      id: 8,
      title: "Ofada Rice",
      category: "lunch",
      price: 13.99,
      img: "./images/ofada-rice.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      order: "Order"
    },
    {
      id: 9,
      title: "Coconut Jollof Rice",
      category: "lunch",
      price: 13.99,
      img: "./images/jollofrice.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      order: "Order"
    },
    {
      id: 10,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      order: "Order",
      view: "View Order"
    },
    {
      id: 11,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      order: "Order"
    },
    {
      id: 12,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      order: "Order"
    },
    {
      id: 13,
      title: "Summer Shakes",
      category: "shakes",
      price: 16.99,
      img: "./images/summer-shakes.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      order: "Order",
      view: "View Order"
    },
    {
      id: 14,
      title: "Frosty Yoghurt",
      category: "shakes",
      price: 16.99,
      img: "./images/frosty-yoghurt.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      order: "Order"
    },
    {
      id: 15,
      title: "Eforiro & Poundedyam",
      category: "lunch",
      price: 16.99,
      img: "./images/pounded-yam.png",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      order: "Order"
    },
  ];
  
const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");
  // load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu)
});


// filter items

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItems) {

      // console.log(menuItems.category)

      if (menuItems.category === category) {
        return menuItems;
      }
     
      
    });

    // console.log(menuCategory)

    if (category === "all") {
      displayMenuItems(menu)
    }
    else {
      displayMenuItems(menuCategory)
    }
  });
});


// itemBtn.addEventListener('click', () => {
//   itemBtn.innerHTML = "hcbhsa"
//   console.log("hello")
// })


function displayMenuItems(menuItems) {  
  let displayMenu = menuItems.map(function (item) {

    return ` <article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}">
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
     ${item.desc}
     <br>
      <button class="item-button">${item.order}</button>
    </div>
  </article>`
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu
};

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
});





