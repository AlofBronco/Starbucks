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
