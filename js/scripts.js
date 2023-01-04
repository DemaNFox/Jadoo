const burgerIcon = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu__body");
const menuActions = document.querySelector(".menu__actions");
const body = document.querySelector("body");

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("menu-open");
  menu.classList.toggle("opened");
  body.classList.toggle("lock");
  menuActions.classList.toggle("opened");
});

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  pagination: {
    el: ".about-us__slider-dots",
    clickable: true,
  },
  navigation: {
    nextEl: ".about-us__arrows-down",
    prevEl: ".about-us__arrows-up",
  },
  speed:600,
  effect: "fade",
  fadeEffect: {
    crossFade: false
  },
});

swiper.on('slideChangeTransitionEnd', changeSliderHeight);

document.addEventListener("DOMContentLoaded", createBgSlideClone);
document.addEventListener("DOMContentLoaded", changeSliderHeight);

function createBgSlideClone() {
  const slides = document.querySelectorAll(".about-us__body");
  
    for (elem of slides) {
      if (elem.querySelector(".clone") == null) {
      const slideBodyClone = elem.cloneNode(true);
      const pOfSlideBody = slideBodyClone.querySelector("p")  
    
      function removeParagraf() {
        pOfSlideBody.remove();
      }
      removeParagraf()  
    
      const cloneName = slideBodyClone.querySelector(".about-us__author-name");
      const cloneLocation = slideBodyClone.querySelector(".about-us__location");

      function getIndex () {
        const newArr = [...slides]
        let indexElement = 0;
        for (indexElem of newArr) {
          if (indexElem === elem) {
            indexElement = newArr.indexOf(indexElem);
          }
        }

        return indexElement + 1 
      }

      const sliderSecondIndex = getIndex ();
      const secondSlide = slides[sliderSecondIndex];

      const secondSlideNameVal = secondSlide.querySelector(".about-us__author-name").innerText;
      const secondSlideLocationVal = secondSlide.querySelector(".about-us__location").innerText;
    
      function replaceText() {
        cloneName.innerText = secondSlideNameVal;
        cloneLocation.innerText = secondSlideLocationVal;
      }
      replaceText()   
    
      slideBodyClone.classList.add("clone");
      elem.append(slideBodyClone);
    }
  }
}

function changeSliderHeight() {
const slider = document.querySelector(".swiper");
const activeSlide = slider.querySelector(".swiper-slide-active");
const activeSlideBody = activeSlide.querySelector(".about-us__body");
const activeSlideBodyHeight = activeSlideBody.offsetHeight;
const summ = activeSlideBodyHeight + 34 /* (половина картинки) */ + 80 /* (выступ блока фона) */ + 20 /* (падинг) */ ;

slider.style.maxHeight = `${summ}px`
}


