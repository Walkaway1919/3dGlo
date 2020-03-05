'use strict';
import 'element-closest-polyfill';
import 'dom-node-polyfills';
import 'nodelist-foreach-polyfill';
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


countTimer();
toggleMenu();
togglePopUp();
tabs();
slider();
calc();
sendForm();
photoChange();
checkField();
scrollElems();