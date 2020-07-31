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

const images = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dvytythnk/image/upload/v1595694971/plate-of-appetizing-fish-dish-arranged-with-lemons-tomatoes-1502286_nxauqr.jpg",
    text:"The Best Food Plug !!!"
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dvytythnk/image/upload/v1595692132/composition-of-spoonfuls-with-various-spices-for-healthy-4199098_djgiki.jpg",
    text: "Quality Assured Herbs and Spices."
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dvytythnk/image/upload/v1595696120/green-vegetable-in-white-bowl-1352199_jzbskf.jpg",
    text: "Fresh and Wholesome Ingredients."
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dvytythnk/image/upload/v1595695099/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545_wv8bgg.jpg",
    text: "Mouth Watering Meals..."
  },
]


const img = document.getElementById('logo');
const text = document.getElementById('text')


const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentImage = 0;

window.addEventListener(`DOMContentLoaded`, function () {
  showImage()
})
function showImage() {
  const image= images[currentImage]
  img.src = image.img
  text.textContent = image.text
}
nextBtn.addEventListener('click', function () {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  showImage()
})
prevBtn.addEventListener('click', function () {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage()
});
