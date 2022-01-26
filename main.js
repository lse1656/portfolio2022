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
// const cursorImg = document.querySelector('.cursor-img');
// const projectItem = document.querySelectorAll('.project-item a');

// function showImg() {
//   cursorImg.classList.add('show');
// }

// function hideImg() {
//   cursorImg.classList.remove('show');
// }

// projectItem.forEach((element) => {
//   element.addEventListener('mouseover', showImg);
// });
// projectItem.forEach((element) => {
//   element.addEventListener('mouseleave', hideImg);
// });
