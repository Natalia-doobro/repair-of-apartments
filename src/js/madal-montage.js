(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-montage]'),
    closeModalBtn: document.querySelector('[data-modal-close-montage]'),
    modal: document.querySelector('[data-modal-montage]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle('is-hidden');
  }
})();