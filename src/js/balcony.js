import markup from '../templates/gallery.hbs';;
import galleryBalcony from './balcony.json';


// добавляем разметку фото в галерею
const listBalcony = document.querySelector('.js-balcony');  
const modalBalcony = document.querySelector('.lightbox-balcony');
const modalImage = document.querySelector('.image--balcony');
const modalBtn = document.querySelector('.lightbox__button--balcony');
const modalOverlay = document.querySelector('.lightbox__overlay--balcony');
const blockPhotoBtnDack = document.querySelector('.btn-back--balcony');
const blockPhotoBtnNext = document.querySelector('.btn-next--balcony');
//-----------------------------------------------------------------------------------------------------------------------------------


// //ШАБЛОНИЗАТОР

const photoBalcony = galleryBalcony.map(markup).join('');
listBalcony.insertAdjacentHTML('beforeend', photoBalcony);


//ДЕЛЕГИРОВАНИЕ

function onModalOpen(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') { 
    return;
  }

  //РАБОТА С МОДАЛЬНЫМ ОКНОМ
    modalBalcony.classList.add('is-open');
    modalImage.src = evt.target.dataset.source;
 
  
  
 
  //------------------------------------------------------------------------------
  window.addEventListener('keydown', onEscKeyClick);
  modalBtn.addEventListener('click', onModalClose);
  modalOverlay.addEventListener('click', onModalClose);
};

function onModalClose(evt) {

  modalBalcony.classList.remove('is-open');
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
  const imgSrc = galleryBalcony.map(elem => elem.original);
  
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
  const imgSrc = galleryBalcony.map(elem => elem.original).reverse();
  

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


listBalcony.addEventListener('click', onModalOpen);
