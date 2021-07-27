(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-turnkey-repair]'),
    closeModalBtn: document.querySelector('[data-modal-close-turnkey-repair]'),
    modal: document.querySelector('[data-modal-turnkey-repair]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle('is-hidden');
  }
})();