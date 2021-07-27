(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-plumbing]'),
    closeModalBtn: document.querySelector('[data-modal-close-plumbing]'),
    modal: document.querySelector('[data-modal-plumbing]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle('is-hidden');
  }
})();