'use strict';

// select all the elements at the top of the file
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// collect all of the show modal class buttons
const btnsShowModal = document.querySelectorAll('.show-modal');

// function to open the modal when clicked on
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// function to close the modal when clicked on
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  // open the modal on click
  btnsShowModal[i].addEventListener('click', openModal);

  // close the modal on the x button of the modal window
  btnCloseModal.addEventListener('click', closeModal);
}

// once clicked outside the modal on the underlying page, close the modal
overlay.addEventListener('click', closeModal);

// listen to ESC event, which is a global event because it does not happen on one specific spot, but on the whole document
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
