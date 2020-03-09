'use strict';
import 'element-closest-polyfill';
import 'dom-node-polyfills';
import 'nodelist-foreach-polyfill';
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

import countTimer from './countTimer';
import toggleMenu from './toggleMenu';
import togglePopUp from './togglePopUp';
import scrollElems from './scrollElems';
import tabs from './tabs';
import slider from './slider';
import calc from './calc';
import sendForm from './sendForm';
import photoChange from './photoChange';
import checkField from './checkField';

countTimer(); // таймер обратного отсчета
toggleMenu();
togglePopUp();
tabs();
slider();
calc();
checkField(); // валидатор полей отправки
sendForm();
photoChange(); // Смена фото по наведению  src <-> data-img
scrollElems(); // Плавный скролл к элементу