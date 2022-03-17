// custrom cursor
const cursor = document.querySelector('.cursor');
const cursorBody = document.querySelector('.cursor-body');
const link = document.querySelectorAll('a');
const button = document.querySelectorAll('button');
const cursorWidth = 30;

function movingCursor(e) {
  cursor.style.transform = `translate3D(${e.clientX}px,${e.clientY}px,0)`;
}

function growCurosr() {
  cursorBody.classList.add('grow');
}

function shrinkCursor() {
  cursorBody.classList.remove('grow');
}

window.addEventListener('mousemove', movingCursor);
window.addEventListener('scroll', movingCursor);
link.forEach((element) => {
  element.addEventListener('mouseover', growCurosr);
  element.addEventListener('mouseleave', shrinkCursor);
});
button.forEach((element) => {
  element.addEventListener('mouseover', growCurosr);
  element.addEventListener('mouseleave', shrinkCursor);
});

// project에 mouseover 하면 이미지 나타나기
const cursorImg = document.querySelectorAll('.cursor-img');
const projectItem = document.querySelectorAll('.project-item');
const projectList = document.querySelector('.project-list');
let currElem;

function setData() {
  projectItem.forEach((element, i) => {
    element.setAttribute('data-index', i);
  });
  cursorImg.forEach((element, i) => {
    element.setAttribute('data-index', i);
  });
}
setData(); //data-index 부여

function showImg(e) {
  let currentIndex = this.getAttribute('data-index');
  cursorImg.forEach((element, i) => {
    let imgIndex = element.getAttribute('data-index');
    if (imgIndex == currentIndex) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}

function hideImg() {
  cursorImg.forEach((element) => {
    element.classList.remove('show');
  });
}

projectItem.forEach((element) => {
  element.addEventListener('mouseover', showImg);
  element.addEventListener('mouseleave', hideImg);
});

//scroll effect
const underline = document.querySelectorAll('.underline');
const fadeOutElem = document.querySelectorAll('.fadeOut');
const elemArray = [...fadeOutElem];

window.addEventListener('scroll', () => {
  const getBoundingElem = elemArray.map((elem) => {
    return elem.getBoundingClientRect().top;
  }); //각 element의 위치값 가져오기

  getBoundingElem.forEach((a, i) => {
    if (getBoundingElem[i] < window.innerHeight * 0.9) {
      elemArray[i].classList.add('fadeIn');
    }
  }); //조건 달성시 class값 fadeIN 추가

  underline.forEach((underline) => {
    let underlineY = underline.getBoundingClientRect().top;
    if (underlineY < window.innerHeight * 0.9) {
      underline.classList.add('show');
    }
  }); // 조건 달성시 underline에 class값 show 추가
});

//parallax
const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  parallax.style.transform = `translateX(${scrollY / 4}px)`;
});

//main-logo, cursor 색 변경
const mainLogo = document.querySelector('.main-logo');
const skillSec = document.querySelector('.skill');
const footerSec = document.querySelector('.footer');

let skillHeight = skillSec.offsetHeight;
let footerHeight = footerSec.offsetHeight;
let logoHeight = mainLogo.offsetHeight;

let skillY = skillSec.offsetTop;
let footerY = footerSec.offsetTop;

window.addEventListener('resize', () => {
  skillHeight = skillSec.offsetHeight;
  footerHeight = footerSec.offsetHeight;
  logoHeight = mainLogo.offsetHeight;

  skillY = skillSec.offsetTop;
  footerY = footerSec.offsetTop;
}); //화면 창 크기 변경시 값 변경

window.addEventListener('scroll', () => {
  let pageY = window.pageYOffset + logoHeight;

  if (pageY > skillY && pageY < skillY + skillHeight) {
    mainLogo.classList.add('light');
  } else {
    mainLogo.classList.remove('light');
  }
});

// cursor 색변경
const lightCursor = () => {
  cursorBody.classList.add('light');
};

const darkCursor = () => {
  cursorBody.classList.remove('light');
};

skillSec.addEventListener('mouseover', lightCursor);
skillSec.addEventListener('mouseleave', darkCursor);

footerSec.addEventListener('mouseover', lightCursor);
footerSec.addEventListener('mouseleave', darkCursor);
