const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__container');
const logo = document.querySelector('.navigation__logo');

menuBtn.addEventListener('click', function(){

    if(menu.classList.contains('active')){
        logo.classList.remove('active');
        menuBtn.classList.remove('active');
        menu.classList.remove('visible');
        setTimeout(function(){menu.classList.remove('active')}, 400);
        document.body.style.overflow = 'auto';
    } else {
        logo.classList.add('active');
        menuBtn.classList.add('active');
        menu.classList.add('active');
        setTimeout(function(){menu.classList.add('visible')}, 0);
        document.body.style.overflow = 'hidden';
    }
});


const modalOpenBtn = document.querySelectorAll('.modal-btn');
const modal = document.querySelector('.modal__window');
const modalCloseBtn = document.querySelector('.modal-close__btn');
const modalContainer = document.querySelector('.modal__container');

modalOpenBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        modal.classList.add('active');
        setTimeout(function(){modal.classList.add('visible')});
        document.body.style.overflow = 'hidden';
    })
})

modalCloseBtn.addEventListener('click', function(){
    modal.classList.remove('visible');
    setTimeout(function(){modal.classList.remove('active')}, 400);
    document.body.style.overflow = 'auto';
})

modal.addEventListener('click', function(event){
	if(!event.composedPath().includes(modalContainer)){
      modal.classList.remove('visible');
      setTimeout(function(){modal.classList.remove('active')}, 400);
      document.body.style.overflow = 'auto';
	}
})


const slider = document.querySelector('.sliderr');
const before = document.querySelector('.beforee');
const beforeImage = before.querySelector('img');
const change = document.querySelector('.change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
	let width = slider.offsetWidth;
	beforeImage.style.width = `${width}px`;
});

change.addEventListener('mousedown', () => {
	isActive = true;
});

body.addEventListener('mouseup', () => {
	isActive = false;
});

body.addEventListener('mouseleave', () => {
	isActive = false;
});

const beforeAfterSlider = (x) => {
	let shift = Math.max(0, Math.min(x, slider.offsetWidth));
	before.style.width = `${shift}px`;
	change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
	e.stopPropagation();
	return false;
};

body.addEventListener('mousemove', (e) => {
	if (!isActive) {
		return;
	}

	let x = e.pageX;
	x -= slider.getBoundingClientRect().left;
	beforeAfterSlider(x);
	pauseEvents(e);
});

change.addEventListener('touchstart', () => {
	isActive = true;
});

body.addEventListener('touchend', () => {
	isActive = false;
});

body.addEventListener('touchcancel', () => {
	isActive = false;
});

body.addEventListener('touchmove', (e) => {
	if (!isActive) {
		return;
	}

  let x;
  
  let i;
  for (i = 0; i < e.changedTouches.length; i++) {
  	x = e.changedTouches[i].pageX; 
  }
  
  x -= slider.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});

gsap.registerPlugin(ScrollTrigger);

gsap.to('.navigation', {
  scrollTrigger: {
  trigger: '.navigation',
  start: 'top 0',
  end: 'bottom',
  },
  y: 0,
  opacity: 1,
  duration: .40,
  delay: .05,
  ease:"CircIn"
});

gsap.to('.slogan__text', {
  scrollTrigger: {
  trigger: '.slogan__text',
  start: 'top center',
  end: 'bottom',
  },
  x: 0,
  opacity: 1,
  duration: .65,
  ease:"CircIn"
});

gsap.to('.slogan__image', {
  scrollTrigger: {
  trigger: '.slogan__image',
  start: 'top 500px',
  end: 'bottom',
  },
  x: 0,
  opacity: 1,
  duration: .65,
  ease:"CircIn",
  zIndex: 1,
});

gsap.to('.services', {
  scrollTrigger: {
  trigger: '.services',
  start: 'top 500px',
  end: 'top center',
  },
  y: 0,
  opacity: 1,
  duration: 1,
  ease:"CircIn"
});

gsap.to('.about', {
  scrollTrigger: {
  trigger: '.about',
  start: 'top bottom',
  end: 'bottom',
  },
  y: 0,
  duration: 1,
  ease:"CircIn"
});

gsap.to('.about__statistic', {
  scrollTrigger: {
  trigger: '.about__statistic',
  start: 'top 800px',
  end: 'bottom',
  },
  x: 0,
  opacity: 1,
  duration: 1,
  ease:"CircIn"
});

gsap.to('.transformations', {
  scrollTrigger: {
  trigger: '.transformations',
  start: 'top 500px',
  end: 'bottom',
  },
  y: 0,
  opacity: 1,
  duration: 1,
  ease:"CircIn"
});

gsap.to('.portfolio', {
  scrollTrigger: {
  trigger: '.portfolio',
  start: 'top 500px',
  end: 'bottom',
  },
  y: 0,
  opacity: 1,
  duration: 1,
  ease:"CircIn"
});

gsap.to('.plan__step-one', {
  opacity: 1,
  scrollTrigger: {
  trigger: '.plan__step-one',
  start: 'top bottom',
  end: 'bottom 550px',
  scrub: true,
  },
  x: 0,
  duration: .5,
  ease:"CircIn"
});

gsap.to('.plan__step-two', {
  opacity: 1,
  scrollTrigger: {  
  trigger: '.plan__step-two',
  start: 'top bottom',
  end: 'bottom 550px',
  scrub: true,
  },
  x: 0,
  duration: .5,
  ease:"CircIn"
});

gsap.to('.plan__step-three', {
  opacity: 1,
  scrollTrigger: {
  trigger: '.plan__step-three',
  start: 'top bottom',
  end: 'bottom 550px',
  scrub: true,
  },
  x: 0,
  duration: .5,
  ease:"CircIn"
});

gsap.to('.plan__step-four', {
  opacity: 1,
  scrollTrigger: {
  trigger: '.plan__step-four',
  start: 'top bottom',
  end: 'bottom 550px',
  scrub: true,
  },
  x: 0,
  duration: .5,
  ease:"CircIn"
});

gsap.to('.plan__step-five', {
  opacity: 1,
  scrollTrigger: {
  trigger: '.plan__step-five',
  start: 'top bottom',
  end: 'bottom 550px',
  scrub: true,
  },
  x: 0,
  duration: .5,
  ease:"CircIn"
});

gsap.from('.plan__line', {
  scrollTrigger: {
  trigger: '.plan__line',
  start: 'top center',
  end: 'bottom 0',
  scrub: true,
  },
  y: 0,
  height: '0%',
  duration: .5,
  ease:"CircIn"
});


gsap.to('.plan__number1', {
  scrollTrigger: {
  trigger: '.plan__number1',
  start: 'top bottom',
  end: 'bottom bottom',
  scrub: true,
  },
  y: 0,
  opacity: 1,
  duration: .5,
  ease:"CircIn"
});

gsap.to('.plan__number2', {
  scrollTrigger: {
  trigger: '.plan__number2',
  start: 'top bottom',
  end: 'bottom bottom',
  scrub: true,
  },
  y: 0,
  opacity: 1,
  duration: .5,
  ease:"CircIn"
});

gsap.to('.plan__number3', {
  scrollTrigger: {
  trigger: '.plan__number3',
  start: 'top bottom',
  end: 'bottom bottom',
  scrub: true,
  },
  y: 0,
  opacity: 1,
  duration: .5,
  ease:"CircIn"
});

gsap.to('.plan__number4', {
  scrollTrigger: {
  trigger: '.plan__number4',
  start: 'top bottom',
  end: 'bottom bottom',
  scrub: true,
  },
  y: 0,
  opacity: 1,
  duration: .5,
  ease:"CircIn"
});

gsap.to('.plan__number5', {
  scrollTrigger: {
  trigger: '.plan__number5',
  start: 'top bottom',
  end: 'bottom bottom',
  scrub: true,
  },
  y: 0,
  opacity: 1,
  duration: .5,
  ease:"CircIn"
});

Fancybox.show('.portfolio__image', {

});