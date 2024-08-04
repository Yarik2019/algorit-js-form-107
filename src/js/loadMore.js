import { refs } from './refs';
export function showBtn() {
  refs.loadMore.classList.remove('is-hidden');
}

export function hideBtn() {
  refs.loadMore.classList.add('is-hidden');
}
