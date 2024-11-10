import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/pixabay-api';
import createMarkUp from './js/render-functions';

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
  if (!loadButton.classList.contains('is-hidden')) {
    loadButton.classList.add('is-hidden');
  }

  page = 1;

  gallery.innerHTML = '';
  searchQuery = e.currentTarget.elements.query.value;

  if (searchQuery === '') {
    iziToast.error({
      message: 'Please enter a value!',
    });
    return;
  };

  fetchImages(searchQuery, page)
    .then(({ data: { hits } }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        })
        return;
      }
      gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
      lightbox.refresh();
      loadButton.classList.remove('is-hidden');
      page++;
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: 'Please try again',
      });
    });
}


function handleLoadMore() {
  fetchImages(searchQuery, page).then(({ data: { hits } }) => {
    gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
    lightbox.refresh();
  })

  page++;
}

