parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdeU":[function(require,module,exports) {
const e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],t=document.querySelector(".js-gallery"),o=document.querySelector(".lightbox"),i=document.querySelector(".lightbox__image"),n=document.querySelector(".lightbox__button"),a=document.querySelector(".lightbox__overlay"),p=document.querySelector(".btn-back"),c=document.querySelector(".btn-next"),r=document.querySelector(".photo__img"),s=(e,{preview:t,original:o,description:i})=>e+`<li class="photo__item"><a class="photo__link" href=${o}><img class="img photo__img" src=${t} data-source=${o} alt=${i} width="250"></a></li>`,l=e.reduce(s,"");function d(e){e.preventDefault(),"IMG"===e.target.nodeName&&(o.classList.add("is-open"),i.src=e.target.dataset.source,i.alt=e.target.alt,window.addEventListener("keydown",g),n.addEventListener("click",h),a.addEventListener("click",h))}function h(e){o.classList.remove("is-open"),i.src="",i.alt="",window.removeEventListener("keydown",g),n.removeEventListener("click",h),a.removeEventListener("click",h)}function g(e){console.log(e.code),"Escape"===e.code&&h()}t.insertAdjacentHTML("beforeend",l);const m=e.map(e=>e.original),_=e.map(e=>e.description);function u(e){e.preventDefault(),m.forEach(e=>{if(i.src===e){let t=m.indexOf(e);-1!==(t-=1)?(i.src=m[t],i.alt=_[t]):h()}})}function y(e){e.preventDefault(),m.forEach(e=>{if(i.src===e){let t=m.indexOf(e);t+=1,console.log(t),10!==t?(i.src=m[t],i.alt=_[t]):h()}})}t.addEventListener("click",d),p.addEventListener("click",u),c.addEventListener("click",y);
},{}]},{},["QdeU"], null)
//# sourceMappingURL=/repair-of-apartments/app.c77dca05.js.map