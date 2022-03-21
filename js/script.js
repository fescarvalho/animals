import ScrollSmooth from "./modules/scrollSuave.js";
const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollSmooth.init();

import scrollAnimation from "./modules/animacaoScroll.js";
scrollAnimation();
import initNavTab from "./modules/navTab.js";
initNavTab();
import accordionFaq from "./modules/accordionFaq.js";
accordionFaq();
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
/* import initScrollImg from "./modules/scrollimg.js";
initScrollImg(); */
/* import outsideClick from "./module/outsideClick.js";
outsideClick(); */
