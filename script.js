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

function showMenu() {
  const menu = document.getElementById('slide-in-menu');
  const burgerButton = document.getElementById('burger-button');
  const body = document.getElementsByTagName('body');

  menu.style.right = '0';
  body[0].style.overflow = 'hidden';

  burgerButton.toggleAttribute('onclick', 'showMenu()');
  burgerButton.setAttribute('onclick', 'closeMenu()');
}

function closeMenu() {
  const menu = document.getElementById('slide-in-menu');
  const burgerButton = document.getElementById('burger-button');
  const body = document.getElementsByTagName('body');

  menu.style.right = '-600px';
  body[0].style.overflow = 'visible';

  burgerButton.toggleAttribute('onclick', 'closeMenu()');
  burgerButton.setAttribute('onclick', 'showMenu()');
}
