// cursor
const cursor = document.querySelector('.cursor');
const cursorBody = document.querySelector('.cursor-body');
const link = document.querySelectorAll('a');
const button = document.querySelectorAll('button');
const cursorWidth = 30;

function movingCursor(e) {
  cursor.style.transform = `translate3D(${e.clientX}px,${e.clientY}px,0)`;
}

function shrinkCursor() {
  cursorBody.classList.add('shrink');
}

function growCurosr() {
  cursorBody.classList.remove('shrink');
}

window.addEventListener('mousemove', movingCursor);
window.addEventListener('scroll', movingCursor);
link.forEach((element) => {
  element.addEventListener('mouseover', shrinkCursor);
  element.addEventListener('mouseleave', growCurosr);
});
button.forEach((element) => {
  element.addEventListener('mouseover', shrinkCursor);
  element.addEventListener('mouseleave', growCurosr);
});

// project cursor
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
const tit = document.querySelectorAll('.section-title h2');
const titPara = document.querySelector('.section-title p');
const projectItemLink = document.querySelectorAll('.project-item a');

const elements = [titPara];

tit.forEach((elem) => {
  elements.push(elem);
});

projectItemLink.forEach((elem) => {
  elements.push(elem);
});

window.addEventListener('scroll', () => {
  const getBoundingElem = elements.map((elem) => {
    return elem.getBoundingClientRect().top;
  }); //element의 위치값 가져오기

  getBoundingElem.forEach((a, i) => {
    if (getBoundingElem[i] < window.innerHeight * 0.9) {
      elements[i].id = 'fadeIn';
    }
  }); //조건 달성시 fadeIn id 추가

  underline.forEach((underline) => {
    let underlineY = underline.getBoundingClientRect().top;
    if (underlineY < window.innerHeight * 0.95) {
      underline.classList.add('show');
    }
  });
});
