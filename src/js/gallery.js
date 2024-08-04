import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getPhotos } from './unsplash-api';
import { refs } from './refs';
import { createMarkup } from './create-markup';
import { showLoader, hideLoader } from './loader';
import { showBtn, hideBtn } from './loadMore';

refs.form.addEventListener('submit', onSubmit);
refs.loadMore.addEventListener('click', onClick);

let page = 1;
let searchQuery = null;

async function onSubmit(event) {
  event.preventDefault();
  page = 1;
  showLoader();
  refs.galleryList.innerHTML = '';
  searchQuery = event.currentTarget.elements.search.value.trim();

  try {
    const response = await getPhotos(searchQuery, page);
    if (response.results.length === 0) {
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'bottomRight',
      });
    }
    refs.galleryList.innerHTML = createMarkup(response.results);
    showBtn();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    event.target.reset();
  }
}

async function onClick() {
  page += 1;
  // iii
  showLoader();
  try {
    const response = await getPhotos(searchQuery, page);
    const lastPage = Math.ceil(response.total / 12);
    refs.galleryList.insertAdjacentHTML(
      'beforeend',
      createMarkup(response.results)
    );
    if (lastPage === page) {
      hideBtn();
      iziToast.info({
        message: 'The end',
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
