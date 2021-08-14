import markup from '../templates/gallery.hbs';
import galleryRoom from './living-room.json';


// добавляем разметку фото в галерею
const listLivingRoom = document.querySelector('.js-living-room'); 
const modalLivingRoom = document.querySelector('.lightbox-living-room');
 
const modalImage = document.querySelector('.lightbox__image');
const modalBtn = document.querySelector('.lightbox__button');
const modalOverlay = document.querySelector('.lightbox__overlay');

const blockPhotoBtnDack = document.querySelector('.btn-back');
const blockPhotoBtnNext = document.querySelector('.btn-next');

//-----------------------------------------------------------------------------------------------------------------------------------

// //ШАБЛОНИЗАТОР
const photoRoom = galleryRoom.map(markup).join('');
listLivingRoom.insertAdjacentHTML('beforeend', photoRoom);


//ДЕЛЕГИРОВАНИЕ
function onModalOpen(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') { 
    return;
  }

  //РАБОТА С МОДАЛЬНЫМ ОКНОМ
    modalLivingRoom.classList.add('is-open');
    modalImage.src = evt.target.dataset.source;
  //------------------------------------------------------------------------------
  window.addEventListener('keydown', onEscKeyClick);
  modalBtn.addEventListener('click', onModalClose);
  modalOverlay.addEventListener('click', onModalClose);
};

function onModalClose(evt) {

  modalLivingRoom.classList.remove('is-open');
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
  console.log(evt.target);
  const imgSrc = galleryRoom.map(elem => elem.original);
  
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
  const imgSrc = galleryRoom.map(elem => elem.original).reverse();
  

  imgSrc.forEach(elem => {
    if (modalImage.src === elem) {
      let index = imgSrc.indexOf(elem);
      index = index - 1;
      console.log(index);
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

listLivingRoom.addEventListener('click', onModalOpen);
