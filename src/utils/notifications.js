import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  position: 'topRight',
  timeout: 5000,
  closeOnEscape: true,
});

export function errorFetch() {
  return iziToast.error({
    title: 'Error',
    message: 'Please try again',
  });
}

export function errorQuery() {
  return iziToast.error({
    position: 'topRight',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}

export function errorEmptyQuery() {
  return iziToast.error({
    message: 'Please enter a value!',
  });
}

export function warning() {
  return iziToast.warning({
    title: 'Warning',
    message: 'We are out of images. Please change the query',
  });
}

