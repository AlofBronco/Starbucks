document.querySelectorAll('.info-box-inner').forEach((infoBox) => {
  infoBox.addEventListener('click', function () {
    const unorderedList = this.querySelector('ul');

    if (unorderedList.style.maxHeight) {
      unorderedList.style.maxHeight = null;
    } else {
      unorderedList.style.maxHeight = unorderedList.scrollHeight + 'px';
    }

    const arrowSvg = this.querySelector('.arrow');
    arrowSvg.classList.toggle('flip');
  });
});

const menu = document.getElementById('slide-in-menu');
const overlay = document.getElementById('overlay');
const burgerButton = document.getElementById('burger-button');
const body = document.getElementsByTagName('body')[0];

function showMenu() {
  menu.style.right = '0';
  body.style.overflow = 'hidden';
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 0);
  overlay.style.display = 'block';

  burgerButton.toggleAttribute('onclick', 'showMenu()');
  burgerButton.setAttribute('onclick', 'closeMenu()');
}

function closeMenu() {
  menu.style.right = '-100%';
  body.style.overflow = 'visible';
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 200);

  burgerButton.toggleAttribute('onclick', 'closeMenu()');
  burgerButton.setAttribute('onclick', 'showMenu()');
}
