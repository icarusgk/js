import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';

const buttonElement = document.querySelector('#secret-button');
const pElement = document.querySelector('#secret-p');

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(pElement);
    changeToFunkyColor(buttonElement);
})