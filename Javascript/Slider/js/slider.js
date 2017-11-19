/*
Slider JS 
*/

var slider = document.querySelector('.slider');
var thumb = slider.querySelector('.thumnails');
var listThumb = thumb.querySelectorAll('img');
var currImg = slider.querySelector('.current-image');
var arrowLeft = slider.querySelector('.arrow-left');
var arrowRight = slider.querySelector('.arrow-right');

function styleList() {
  if (thumb.scrollWidth == thumb.offsetWidth) {
    thumb.style.justifyContent = 'center';
  } else {
    thumb.style.justifyContent = 'flex-start';
  }

};
// Clicking on the arrow button will move the image forward
function Next() {
  var current = thumb.querySelector('.current-image-list');
  current.parentElement.nextElementSibling.children[0].classList.add('current-image-list');
  current.classList.remove('current-image-list');
  current = thumb.querySelector('.current-image-list');
  thumb.scrollLeft = current.offsetLeft;
  currImg.attributes.src.value = current.attributes.src.value;
  currImg.classList.add('slideInFromRight');
  setTimeout(function () {
    currImg.classList.remove('slideInFromRight');
  }, 500);
};

// Clicking the arrow button will move the image backwards
function Prev() {
  var current = thumb.querySelector('.current-image-list');
  current.parentElement.previousElementSibling.children[0].classList.add('current-image-list');
  current.classList.remove('current-image-list');
  current = thumb.querySelector('.current-image-list');
  thumb.scrollLeft = current.offsetLeft;
  currImg.attributes.src.value = current.attributes.src.value;
  currImg.classList.add('slideInFromLeft');
  setTimeout(function () {
    currImg.classList.remove('slideInFromLeft');
  }, 500);
};

// Change the current image status
function changecurrImg(newImage) {
  currImg.classList.add('fadeIn');
  setTimeout(function () {
    currImg.classList.remove('fadeIn');
  }, 500);
  currImg.attributes.src.value = this.attributes.src.value;
  listThumb.forEach(function (image) {
    image.classList.remove('current-image-list');
  })
  this.classList.add('current-image-list');
}

styleList();
// Call the Prev and Next functions
arrowLeft.addEventListener('click', Prev);
arrowRight.addEventListener('click', Next);

window.addEventListener('resize', function (e) {
  styleList();
});

(function () {
  if (typeof NodeList.prototype.forEach === "function") return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

listThumb.forEach(function (image) {
  image.addEventListener('click', changecurrImg);
});