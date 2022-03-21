import ScrollSmooth from "./modules/scrollSuave.js";
const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollSmooth.init();

import AccordionFaq from "./modules/accordionFaq.js";
const accordion = new AccordionFaq('[data-menu="accordion"] dt');
accordion.init();

import Tabnav from "./modules/navTab.js";
const tabnav = new Tabnav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabnav.init();

import Modal from "./modules/modalLogin.js";
const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='modal']"
);
modal.init();

import ToolTip from "./modules/toolTip.js";
const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

import fetchAnimais from "./modules/animais-fetch.js";
fetchAnimais("../animaisapi.json", ".numeros-grid");

import scrollAnimation from "./modules/animacaoScroll.js";
scrollAnimation();
import initMenuMobile from "./modules/menuMobile.js";
initMenuMobile();

import initDataObject from "./modules/dataObject.js";
initDataObject();
import initFetchBitcoin from "./modules/fetchBitcoin.js";
initFetchBitcoin();
/* import initScrollImg from "./modules/scrollimg.js";
initScrollImg(); */
/* import outsideClick from "./module/outsideClick.js";
outsideClick(); */
