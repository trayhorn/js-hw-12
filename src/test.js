import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/pixabay-api';
import createMarkUp from './js/render-functions';
import * as notification from './utils/notifications';
import throttle from 'lodash.throttle';

const elements = {
  form: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
  loadButton: document.querySelector('.js-load-button'),
  scrollButton: document.querySelector('.scroll-up-button'),
};


class Application {
  constructor(page, searchQuery) {
    this.page = page;
    this.searchQuery = searchQuery;
  }

  handleSearch(e) {
    e.preventDefault();
    if (!elements.loadButton.classList.contains('is-hidden')) {
      elements.loadButton.classList.add('is-hidden');
    }

    this.page = 1;

    elements.gallery.innerHTML = '';
    this.searchQuery = e.currentTarget.elements.query.value;

    if (this.searchQuery === '') {
      notification.errorEmptyQuery();
      return;
    }

    fetchImages(this.searchQuery, this.page)
      .then(({ data: { hits } }) => {
        if (hits.length === 0) {
          notification.errorQuery();
          return;
        }
        elements.gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
        lightbox.refresh();

        elements.loadButton.classList.remove('is-hidden');
        this.page++;
      })
      .catch(() => notification.errorFetch());
  }

  handleLoadMore() {
    console.log(this);
    if (this.page <= 31) {
      fetchImages(this.searchQuery, this.page).then(({ data: { hits } }) => {
        elements.gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
        lightbox.refresh();

        this.page++;
      });
    } else {
      fetchImages(this.searchQuery, this.page).then(({ data: { hits } }) => {
        elements.gallery.insertAdjacentHTML('beforeend', createMarkUp(hits));
        lightbox.refresh();
      });

      elements.loadButton.classList.add('is-hidden');
      notification.warning();
    }
  }
}

const application = new Application(1, '');

const lightbox = new SimpleLightbox('.item-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

elements.form
  .addEventListener('submit', application.handleSearch.bind(application));
elements.loadButton
  .addEventListener('click', application.handleLoadMore.bind(application));

elements.scrollButton.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener(
  'scroll',
  throttle(() => {
    window.scrollY > 2400
      ? elements.scrollButton.classList.remove('scroll-hidden')
      : elements.scrollButton.classList.add('scroll-hidden');
  }, 300)
);
