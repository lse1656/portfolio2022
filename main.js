// cursor
const cursor = document.querySelector('.cursor');
const cursorBody = document.querySelector('.cursor-body');
const link = document.querySelectorAll('a');
const cursorWidth = 30;

function movingCursor(e) {
  cursor.style.transform = `translate3D(${e.clientX - cursorWidth / 2}px,${
    e.clientY - cursorWidth / 2
  }px,0)`;
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
});
link.forEach((element) => {
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
