const navMenu = document.querySelector('nav');
const toggleBtn = document.querySelector('.toggle');
const body = document.querySelector('body');

// 네비메뉴 상태 저장
const saveState = (isActive) => {
  localStorage.setItem('navMenuOpen', isActive);
};

// 네비 메뉴 상태 불러오기
const loadState = () => {
  return localStorage.getItem('navMenuOpen') === 'true';
};

const applyTransition = () => {
  body.classList.remove('preload');
};

const toggleBtnHandler = () => {
  const isActive = navMenu.classList.toggle('active');
  saveState(isActive);
  applyTransition();
};

const showBody = () => {
  body.style.visibility = 'visible';
};

toggleBtn.addEventListener('click', () => {
  toggleBtnHandler();
});

// 페이지 로드 시 저장된 상태 불러와 적용
window.addEventListener('DOMContentLoaded', () => {
  const isActive = loadState();
  console.log(isActive);
  if (isActive) {
    navMenu.classList.add('active');
  }
  showBody();
});
