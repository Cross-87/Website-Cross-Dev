
  window.addEventListener("load", function() {

  var loader = document.getElementById("loader");
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  document.body.classList.remove("loading");
  setTimeout(function() {
      loader.style.display = "none" 
      header.style.opacity = 1; 
      main.style.opacity = 1; 
      footer.style.opacity = 1; 
    });
});


let list = document.querySelectorAll('.nav li');
function active(){
    list.forEach((i) => 
    i.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((i) =>
i.addEventListener('click', active));

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function(){
    header.classList.toggle('active');
}

/* Section Aboout Me */

const frontHouse = document.querySelector('.front-house');
const aboutFront = document.querySelector('.card-aboutme.frontend');

const backHouse = document.querySelector('.back-house');
const aboutBack = document.querySelector('.card-aboutme.backend');

const otherHouse = document.querySelector('.other-house');
const aboutOther = document.querySelector('.card-aboutme.other-skills');

const assistance = document.querySelector('.div-assistance');

const manPath = document.querySelector('.man-hover');

const aboutSocial = document.querySelector('.card-aboutme.social');

frontHouse.addEventListener('mouseenter', function() {
  aboutFront.classList.add('hovered');
  assistance.classList.add('hovered');
});
frontHouse.addEventListener('mouseleave', function() {
  aboutFront.classList.remove('hovered');
  assistance.classList.remove('hovered');
});

backHouse.addEventListener('mouseenter', function() {
  aboutBack.classList.add('hovered');
  assistance.classList.add('hovered');
});
backHouse.addEventListener('mouseleave', function() {
  aboutBack.classList.remove('hovered');
  assistance.classList.remove('hovered');
});

otherHouse.addEventListener('mouseenter', function() {
  aboutOther.classList.add('hovered');
  assistance.classList.add('hovered');
});
otherHouse.addEventListener('mouseleave', function() {
  aboutOther.classList.remove('hovered');
  assistance.classList.remove('hovered');
});

manPath.addEventListener('mouseenter', function() {
  aboutSocial.classList.add('hovered');
});
manPath.addEventListener('mouseleave', function() {
  aboutSocial.classList.remove('hovered');
});


const socialPart1 = document.querySelector('.social-part1');
const socialPart2 = document.querySelector('.social-part2');

setInterval(function() {
  if (socialPart1.style.display === 'none') {
    socialPart1.style.display = 'block';
    socialPart2.style.display = 'none';
  } else {
    socialPart1.style.display = 'none';
    socialPart2.style.display = 'block';
  }
}, 5500);



/* HEADER LI ACTIVE FIXED */
