(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileNavList = document.querySelector('[data-menu-list]');
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    document.body.classList.toggle('menu-open');
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileNavList.addEventListener('click', () => {
    menuBtnRef.classList.remove('is-open');
    mobileMenuRef.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
})();
