const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// добавляем разметку фото в галерею
const listLivingRoom = document.querySelector('.js-living-room'); 
const listKitchen = document.querySelector('.js-kitchen'); 
const listBalcony = document.querySelector('.js-balcony'); 
const listBathroom = document.querySelector('.js-bathroom'); 
const listMounting = document.querySelector('.js-mounting'); 
//-----------------------------------------------------------------------------------------------------------------------------------
const modal = document.querySelector('.lightbox'); 
const modalImage = document.querySelector('.lightbox__image');
const modalBtn = document.querySelector('.lightbox__button');
const modalOverlay = document.querySelector('.lightbox__overlay');
const blockPhotoBtnDack = document.querySelector('.btn-back');
const blockPhotoBtnNext = document.querySelector('.btn-next');
const blockPhotoImg = document.querySelector(".photo__img")


const markup = (acc, { preview, original, description }) => acc + `<li class="photo__item"><a class="photo__link" href=${original}><img class="img photo__img" src=${preview} data-source=${original} alt=${description} width="250"></a></li>`;
const photo = galleryItems.reduce(markup, '');

listLivingRoom.insertAdjacentHTML('beforeend', photo);
listKitchen.insertAdjacentHTML('beforeend', photo);
listBalcony.insertAdjacentHTML('beforeend', photo);
listBathroom.insertAdjacentHTML('beforeend', photo);
listMounting.insertAdjacentHTML('beforeend', photo);

//ДЕЛЕГИРОВАНИЕ

function onModalOpen(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') { 
    return;
  }
  
  //РАБОТА С МОДАЛЬНЫМ ОКНОМ
  modal.classList.add('is-open');
  modalImage.src = evt.target.dataset.source; 
  modalImage.alt = evt.target.alt;
  
  //------------------------------------------------------------------------------
  window.addEventListener('keydown', onEscKeyClick);
  modalBtn.addEventListener('click', onModalClose);
  modalOverlay.addEventListener('click', onModalClose);
};

function onModalClose(evt) {
  
  modal.classList.remove('is-open');
  modalImage.src = '';
  modalImage.alt = '';

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
  const imgSrc = galleryItems.map(elem => elem.original);
  const imgAlt = galleryItems.map(elem => elem.description);
  imgSrc.forEach(elem => {
      if (modalImage.src === elem) {
        let index = imgSrc.indexOf(elem);
        index = index - 1;
        if (index !== -1) {
          modalImage.src = imgSrc[index];
          modalImage.alt = imgAlt[index];
        } else {
          onModalClose();
        }
      }
    });
};

function onScrollingNext(evt) {
  const imgSrc = galleryItems.map(elem => elem.original).reverse();
  const imgAlt = galleryItems.map(elem => elem.description).reverse();

  imgSrc.forEach(elem => {
    if (modalImage.src === elem) {
      let index = imgSrc.indexOf(elem);
      index = index - 1;
      console.log(index);
      if (index !== -1) {
        modalImage.src = imgSrc[index];
        modalImage.alt = imgAlt[index];
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
listKitchen.addEventListener('click', onModalOpen);
listBalcony.addEventListener('click', onModalOpen);
listBathroom.addEventListener('click', onModalOpen);
listMounting.addEventListener('click', onModalOpen);