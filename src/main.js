import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.js-gallery');
const loadButton = document.querySelector('.js-load-button');

let page = 1;
let searchQuery;

const lightbox = new SimpleLightbox('.item-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSearch);
loadButton.addEventListener('click', handleLoadMore)

function handleSearch(e) {
  e.preventDefault();

  gallery.innerHTML = '';

  const { query } = e.currentTarget.elements;
  searchQuery = query.value;

  if (searchQuery === '') {
    iziToast.error({
      message: 'Please enter a value!',
    });
    return;
  };

  fetchImages(searchQuery).then(({ data: { hits } }) => {
    gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
    lightbox.refresh();
    loadButton.classList.remove('is-hidden');
    page++;
  })}

function fetchImages(searchQuery) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '29734383-6ec437d7a0c5df52cef54a0f9',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 16,
    },
  });
}

function createMarkUp(arr) {
  return arr.map(
      el =>
        `<li class="gallery-item">
            <a class="item-link" href="${el.largeImageURL}">
              <img
                class="item-image"
                src="${el.webformatURL}"
                alt="${el.tags}"
              >
            </a>
            <div class="item-stats_container">
              <p class="item-stats"><span>Likes</span>${el.likes}</p>
              <p class="item-stats"><span>Views</span>${el.views}</p>
              <p class="item-stats"><span>Comments</span>${el.comments}</p>
              <p class="item-stats"><span>Downloads</span>${el.downloads}</p>
            </div>
          </li>`
    )
    .join('');
}

function handleLoadMore() {
  fetchImages(searchQuery).then(({ data: { hits } }) => {
    gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
    lightbox.refresh();
  })

  page++;
}

