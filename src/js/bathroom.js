import markup from '../templates/gallery.hbs';;
import galleryBathroom from './bathroom.json';


// добавляем разметку фото в галерею
const listBathroom = document.querySelector('.js-bathroom'); 
const modalBathroom = document.querySelector('.lightbox-bathroom');
const modalImage = document.querySelector('.image--bathroom');
const modalBtn = document.querySelector('.lightbox__button--bathroom');
const modalOverlay = document.querySelector('.lightbox__overlay--bathroom');
const blockPhotoBtnDack = document.querySelector('.btn-back--bathroom');
const blockPhotoBtnNext = document.querySelector('.btn-next--bathroom');
//-----------------------------------------------------------------------------------------------------------------------------------


// //ШАБЛОНИЗАТОР

const photoBathroom = galleryBathroom.map(markup).join('');
listBathroom.insertAdjacentHTML('beforeend', photoBathroom);


//ДЕЛЕГИРОВАНИЕ

function onModalOpen(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') { 
    return;
  }

  //РАБОТА С МОДАЛЬНЫМ ОКНОМ
    modalBathroom.classList.add('is-open');
    modalImage.src = evt.target.dataset.source;
   
  
  
 
  //------------------------------------------------------------------------------
  window.addEventListener('keydown', onEscKeyClick);
  modalBtn.addEventListener('click', onModalClose);
  modalOverlay.addEventListener('click', onModalClose);
};

function onModalClose(evt) {

  modalBathroom.classList.remove('is-open');
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
  const imgSrc = galleryBathroom.map(elem => elem.original);
  
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
  const imgSrc = galleryBathroom.map(elem => elem.original).reverse();
  

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


listBathroom.addEventListener('click', onModalOpen);
