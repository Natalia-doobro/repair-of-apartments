import markup from '../templates/gallery.hbs';;
import galleryMounting from './mounting.json';


// добавляем разметку фото в галерею
const listMounting = document.querySelector('.js-mounting'); 
const modalMounting = document.querySelector('.lightbox-mounting');
const modalImage = document.querySelector('.image--mounting');
const modalBtn = document.querySelector('.lightbox__button--mounting');
const modalOverlay = document.querySelector('.lightbox__overlay--mounting');
const blockPhotoBtnDack = document.querySelector('.btn-back--mounting');
const blockPhotoBtnNext = document.querySelector('.btn-next--mounting');
//-----------------------------------------------------------------------------------------------------------------------------------


// //ШАБЛОНИЗАТОР

const photoMounting = galleryMounting.map(markup).join('');
listMounting.insertAdjacentHTML('beforeend', photoMounting);


//ДЕЛЕГИРОВАНИЕ

function onModalOpen(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') { 
    return;
  }

  //РАБОТА С МОДАЛЬНЫМ ОКНОМ
    modalMounting.classList.add('is-open');
    modalImage.src = evt.target.dataset.source;
 
  //------------------------------------------------------------------------------
  window.addEventListener('keydown', onEscKeyClick);
  modalBtn.addEventListener('click', onModalClose);
  modalOverlay.addEventListener('click', onModalClose);
};

function onModalClose(evt) {

  modalMounting.classList.remove('is-open');
  modalImage.src = ''; 
  //------------------------------------------------------------------------------
  window.removeEventListener('keydown', onEscKeyClick);
  modalBtn.removeEventListener('click', onModalClose);
  modalOverlay.removeEventListener('click', onModalClose);
 
};

function onEscKeyClick(evt) {
  
  if (evt.code !== "Escape") {
    return;
  };
  onModalClose();
};

//-------------------------------------------------------------------------------------------------------------------------------------
function onScrollingDack(evt) {
  const imgSrc = galleryMounting.map(elem => elem.original);
  
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
  const imgSrc = galleryMounting.map(elem => elem.original).reverse();
  

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


listMounting.addEventListener('click', onModalOpen);
