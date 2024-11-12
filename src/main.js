import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/pixabay-api';
import createMarkUp from './js/render-functions';

import * as notification from './utils/notifications';

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.js-gallery');
const loadButton = document.querySelector('.js-load-button');

let page;
let searchQuery;

const lightbox = new SimpleLightbox('.item-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSearch);
loadButton.addEventListener('click', handleLoadMore);

function handleSearch(e) {
  e.preventDefault();
  if (!loadButton.classList.contains('is-hidden')) {
    loadButton.classList.add('is-hidden');
  }

  page = 1;

  gallery.innerHTML = '';
  searchQuery = e.currentTarget.elements.query.value;

  if (searchQuery === '') {
    notification.errorEmptyQuery();
    return;
  }

  fetchImages(searchQuery, page)
    .then(({ data: { hits } }) => {
      if (hits.length === 0) {
        notification.errorQuery();
        return;
      }
      gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
      lightbox.refresh();

      loadButton.classList.remove('is-hidden');
      page++;
    })
    .catch(() => notification.errorFetch());
}

function handleLoadMore() {
  if (page <= 31) {
    fetchImages(searchQuery, page).then(({ data: { hits } }) => {
      gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
      lightbox.refresh();

      page++;
    });
  } else {
    fetchImages(searchQuery, page).then(({ data: { hits } }) => {
      gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
      lightbox.refresh();
    });

    loadButton.classList.add('is-hidden');
    notification.warning();
  }
}
