import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Масив даних для галереї
const galleryItems = [
  {
    preview: 'path/to/small-image1.jpg',
    original: 'path/to/large-image1.jpg',
    description: 'Image 1 description',
  },
  {
    preview: 'path/to/small-image2.jpg',
    original: 'path/to/large-image2.jpg',
    description: 'Image 2 description',
  },
  {
    preview: 'path/to/small-image3.jpg',
    original: 'path/to/large-image3.jpg',
    description: 'Image 3 description',
  },
];

// Отримання елемента ul.gallery
const galleryContainer = document.querySelector('.gallery');

// Створення розмітки для галереї
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

// Додавання розмітки в DOM
galleryContainer.innerHTML = galleryMarkup;

// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
