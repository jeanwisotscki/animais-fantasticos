import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-menu="smooth"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]', // btn abrir
  '[data-modal="fechar"]', // btn fechar
  '[data-modal="container"]' // container do modal
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropDownMenu();
initMenuMobile();
initFuncionamento();
initAnimacaoScroll();

// Funções de fetch
fetchAnimais("../../animais-api.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
