function responsiveSlider() {
  const slider = document.querySelector('.swiperSection');
  const sliderList = slider.querySelector('ul');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');	
const left = document.querySelector('.Lside');
const right = document.querySelector('.Rside');


  if (!slider || !sliderList || !prev || !next || !left || !right) {
    alert('Elements not found. Make sure #prev, #next, .left, .right, and .swiperSection ul exist.');
    return;
  }

  const itemsToShow = 5; 
  const totalItems = sliderList.querySelectorAll('li').length; 
  const effectiveWidth = 910; 
  const itemWidth = effectiveWidth / itemsToShow; 
  let currentPosition = 0; 


  slider.style.width = '960px';
  sliderList.style.width = `${itemWidth * totalItems}px`;
  sliderList.querySelectorAll('li').forEach((item) => {
    item.style.width = `${itemWidth}px`;
  });

  function nextSlide() {

    const maxPosition = -(itemWidth * (totalItems - itemsToShow));

    if (currentPosition > maxPosition) {
      currentPosition -= itemWidth * itemsToShow; 
    }

    if (currentPosition < maxPosition) {
      currentPosition = maxPosition; 
    }
    updateSliderPosition();
  }

  function prevSlide() {
    const maxPosition = -(itemWidth * (totalItems - itemsToShow));
    const blockWidth = itemWidth * itemsToShow;
    
if(currentPosition===0){
return;
}

    if (currentPosition === 0) {
currentPosition = maxPosition;
    } else {
      currentPosition += blockWidth;
    }

    updateSliderPosition();
  }

  function updateSliderPosition() {
    sliderList.style.transform = `translateX(${currentPosition}px)`;
 
BtnVisibility(); 
updateHoverEffects();
  }


  function BtnVisibility() {
    prev.style.display = (currentPosition === 0) ? 'none' : 'flex';

    const maxPosition = -(itemWidth * (totalItems - itemsToShow));
    next.style.display = (currentPosition <= maxPosition) ? 'none' : 'flex';
  }


function updateHoverEffects(){
const maxPosition = -(itemWidth * (totalItems - itemsToShow));

if(currentPosition ===0){
left.style.cursor ='default';
prev.style.cursor = 'default';
left.classList.add('no-hover');
prev.classList.add('no-hover');
}else{
left.style.cursor ='pointer';
prev.style.cursor ='pointer';
left.classList.remove('no-hover');
prev.classList.remove('no-hover');
}

if(currentPosition <= maxPosition){
right.style.cursor= 'default';
next.style.cursor = 'default';
right.classList.add('no-hover');
next.classList.add('no-hover');
}else{
right.style.cursor= 'pointer';
next.style.cursor = 'pointer';
right.classList.remove('no-hover');
next.classList.remove('no-hover');

}

}


  BtnVisibility();
updateHoverEffects();
  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
	
}

window.onload = responsiveSlider;



function sideSwiper(){
 const slider = document.querySelector('.swiperSection');
  const sliderList = slider.querySelector('ul');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const left = document.getElementsByClassName('Lside');
const right = document.getElementsByClassName('Rside');	

  if (!slider || !sliderList || !prev || !next || !left || !right) {
    alert('Elements not found. Make sure #prev, #next, .left, .right, and .swiperSection ul exist.');
    return;
  }

  const itemsToShow = 5; 
  const totalItems = sliderList.querySelectorAll('li').length; 
  const effectiveWidth = 910; 
  const itemWidth = effectiveWidth / itemsToShow; 
  let currentPosition = 0; 


  slider.style.width = '960px';
  sliderList.style.width = `${itemWidth * totalItems}px`;
  sliderList.querySelectorAll('li').forEach((item) => {
    item.style.width = `${itemWidth}px`;
  });

  function nextSlide() {

    const maxPosition = -(itemWidth * (totalItems - itemsToShow));

    if (currentPosition > maxPosition) {
      currentPosition -= itemWidth * itemsToShow; 
    }

    if (currentPosition < maxPosition) {
      currentPosition = maxPosition; 
    }
    updateSliderPosition();
  }

  function prevSlide() {
    const maxPosition = -(itemWidth * (totalItems - itemsToShow));
const blockWidth = itemWidth * itemsToShow;
    
if(currentPosition===0){
return;
}
if(currentPosition===0){
currentPosition = maxPosition;
}else{

currentPosition +=blockWidth;

if(currentPosition>0){
currentPosition =0;
}

}

updateSliderPosition();  
  }

  function updateSliderPosition() {
    sliderList.style.transform = `translateX(${currentPosition}px)`;
    BtnVisibility();
updateHoverEffects();
  }

 
function BtnVisibility() {
    prev.style.display = (currentPosition === 0) ? 'none' : 'flex';
    const maxPosition = -(itemWidth * (totalItems - itemsToShow));
    next.style.display = (currentPosition <= maxPosition) ? 'none' : 'flex';
  }

function updateHoverEffects() {
    // Disable hover on Lside (left side) and prev button at the start
    if (currentPosition === 0) {
      Array.from(left).forEach(e => {
        e.classList.add('no-hover'); // Disable hover effect on left side
        e.style.cursor = 'default';
      });
      prev.style.cursor = 'default';
      prev.classList.add('no-hover');
    } else {
      Array.from(left).forEach(e => {
        e.classList.remove('no-hover'); // Enable hover effect on left side
        e.style.cursor = 'pointer';
      });
      prev.style.cursor = 'pointer';
      prev.classList.remove('no-hover');
    }

    const maxPosition = -(itemWidth * (totalItems - itemsToShow));
    // Disable hover on Rside (right side) and next button at the end
    if (currentPosition <= maxPosition) {
      Array.from(right).forEach(e => {
        e.classList.add('no-hover'); // Disable hover effect on right side
        e.style.cursor = 'default';
      });
      next.style.cursor = 'default';
      next.classList.add('no-hover');
    } else {
      Array.from(right).forEach(e => {
        e.classList.remove('no-hover'); // Enable hover effect on right side
        e.style.cursor = 'pointer';
      });
      next.style.cursor = 'pointer';
      next.classList.remove('no-hover');
    }
  }


  BtnVisibility();


Array.from(left).forEach(e=>{
e.addEventListener('click',prevSlide);
})

Array.from(right).forEach(e=>{
e.addEventListener('click',nextSlide);
});


}
sideSwiper();


document.querySelectorAll('.footerUL li').forEach(item=>{
item.addEventListener('click',()=>{
const link = item.querySelector('a');

if(link){
window.location.href=link.href;
window.open = link.href;
}
})
})


document.addEventListener('DOMContentLoaded', function(){
const navLinks = document.querySelectorAll('.navA');
function adjustPadding(){
navLinks.forEach((nav)=>{
const linkWidth = nav.offsetWidth;

if(linkWidth>120){
nav.style.paddingLeft='40px';
nav.style.paddingRight='40px';
}else{
nav.style.paddingLeft='0px';
nav.style.paddingRight='0px';
}

});

}

adjustPadding();

window.addEventListener('resize',adjustPadding);

})






