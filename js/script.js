import ScrollSmooth from "./modules/scrollSuave.js";
const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollSmooth.init();

import AccordionFaq from "./modules/accordionFaq.js";
const accordion = new AccordionFaq('[data-menu="accordion"] dt');
accordion.init();

import scrollAnimation from "./modules/animacaoScroll.js";
scrollAnimation();
import modalLogin from "./modules/modalLogin.js";
modalLogin();
import initToolTip from "./modules/toolTip.js";
initToolTip();
import initMenuMobile from "./modules/menuMobile.js";
initMenuMobile();

import initDataObject from "./modules/dataObject.js";
initDataObject();
import initAnimaisFetch from "./modules/animais-fetch.js";
initAnimaisFetch();
import initFetchBitcoin from "./modules/fetchBitcoin.js";
initFetchBitcoin();
import initNavTab from "./modules/navTab.js";
initNavTab();
/* import initScrollImg from "./modules/scrollimg.js";
initScrollImg(); */
/* import outsideClick from "./module/outsideClick.js";
outsideClick(); */
