(() => {
  const readMoreBtn = document.querySelector('.view__more');
  const readLessBtn = document.querySelector('.view__less');
  const showMoreText = document.querySelector('.text__more');

  readMoreBtn.addEventListener('click', onReadMoreBtnClick);
  readLessBtn.addEventListener('click', onReadLessBtnClick);

  function onReadMoreBtnClick(event) {
    showMoreText.classList.remove('hidden');
    readMoreBtn.classList.add('hidden');
  }

  function onReadLessBtnClick(event) {
    showMoreText.classList.add('hidden');
    readMoreBtn.classList.remove('hidden');
  }
})();
