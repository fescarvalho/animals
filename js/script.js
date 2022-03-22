/* SCROLL SUAVE */
import ScrollSmooth from "./modules/scrollSuave.js";
const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollSmooth.init();

/* ACCORDION FAQ */
import AccordionFaq from "./modules/accordionFaq.js";
const accordion = new AccordionFaq('[data-menu="accordion"] dt');
accordion.init();

/* SLIDE DE ANIMAIS */
import Tabnav from "./modules/navTab.js";
const tabnav = new Tabnav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabnav.init();

/* MODAL LOGIN */
import Modal from "./modules/modalLogin.js";
const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='modal']"
);
modal.init();

/* MAPA TOOLTIP */
import ToolTip from "./modules/toolTip.js";
const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

/* FETCH ANIMAIS */
import fetchAnimais from "./modules/animais-fetch.js";
fetchAnimais("../animaisapi.json", ".numeros-grid");

/* FETCH BITCOIN */
import fetchBitcoin from "./modules/fetchBitcoin.js";
fetchBitcoin("https://blockchain.info/ticker", ".bitcoin");

/* SCROLL ANIMATION */
import ScrollAnimation from "./modules/animacaoScroll.js";
const scrollAnima = new ScrollAnimation("[data-anime='scroll']");
scrollAnima.init();

import DropDownMenu from "./modules/dropDownMenu.js";
const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

import MenuMobile from "./modules/menuMobile.js";
const menuMobile = new MenuMobile(
  '[data-menu="mobile"]',
  '[data-menu="lista"]'
);
menuMobile.init();

import Funcionamento from "./modules/horarioFuncionamento.js";
const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();
/* import initScrollImg from "./modules/scrollimg.js";
initScrollImg(); */

import SlideNav from "./modules/js/slide.js";
const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();

slide.addControlEvent(".custom-controls");
