import markup from '../templates/gallery.hbs';;
import galleryKitchen from './kitchen.json';


// добавляем разметку фото в галерею
const listKitchen = document.querySelector('.js-kitchen'); 
const modalKitchen = document.querySelector('.lightbox-kitchen');
const modalImage = document.querySelector('.image--kitchen');
const modalBtn = document.querySelector('.lightbox__button--kitchen');
const modalOverlay = document.querySelector('.lightbox__overlay--kitchen');
const blockPhotoBtnDack = document.querySelector('.btn-back--kitchen');
const blockPhotoBtnNext = document.querySelector('.btn-next--kitchen');
//-----------------------------------------------------------------------------------------------------------------------------------


// //ШАБЛОНИЗАТОР

const photoKitchen = galleryKitchen.map(markup).join('');
listKitchen.insertAdjacentHTML('beforeend', photoKitchen);


//ДЕЛЕГИРОВАНИЕ

function onModalOpen(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') { 
    return;
  }

  //РАБОТА С МОДАЛЬНЫМ ОКНОМ
    modalKitchen.classList.add('is-open');
    modalImage.src = evt.target.dataset.source;
    console.log(evt.target);
  
  
 
  //------------------------------------------------------------------------------
  window.addEventListener('keydown', onEscKeyClick);
  modalBtn.addEventListener('click', onModalClose);
  modalOverlay.addEventListener('click', onModalClose);
};

function onModalClose(evt) {

  modalKitchen.classList.remove('is-open');
  modalImage.src = ''; 
  //------------------------------------------------------------------------------
  window.removeEventListener('keydown', onEscKeyClick);
  modalBtn.removeEventListener('click', onModalClose);
  modalOverlay.removeEventListener('click', onModalClose);
 
};

function onEscKeyClick(evt) {
  console.log(evt.code);
  if (evt.code !== "Escape") {
    return;
  };
  onModalClose();
};

//-------------------------------------------------------------------------------------------------------------------------------------
function onScrollingDack(evt) {
  const imgSrc = galleryKitchen.map(elem => elem.original);
  
  imgSrc.forEach(elem => {
      if (modalImage.src === elem) {
        let index = imgSrc.indexOf(elem);
        index = index - 1;
        if (index !== -1) {
          modalImage.src = imgSrc[index];
        } else {
          onModalClose();
        }
      }
    });
};

function onScrollingNext(evt) {
  const imgSrc = galleryKitchen.map(elem => elem.original).reverse();
  

  imgSrc.forEach(elem => {
    if (modalImage.src === elem) {
      let index = imgSrc.indexOf(elem);
      index = index - 1;
      if (index !== -1) {
        modalImage.src = imgSrc[index];
        
      } else {
        onModalClose();
      }
    }
  });
};

//-------------------------------------------------------------------------------------------------------------------------------------

blockPhotoBtnDack.addEventListener('click', onScrollingDack);
blockPhotoBtnNext.addEventListener('click', onScrollingNext);


listKitchen.addEventListener('click', onModalOpen);
