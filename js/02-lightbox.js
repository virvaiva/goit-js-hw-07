import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createPhotoCardsMarkup(galleryItems);



function createPhotoCardsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
    `
    })
        .join('');

}
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

