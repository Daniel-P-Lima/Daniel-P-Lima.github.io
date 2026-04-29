// Language switching — runs synchronously in <head> to avoid flash of wrong language
function initLanguage() {
  var saved = localStorage.getItem('lang');
  var lang;
  if (saved === 'pt' || saved === 'en') {
    lang = saved;
  } else {
    var browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    lang = browserLang.startsWith('pt') ? 'pt' : 'en';
  }
  document.documentElement.setAttribute('data-lang', lang);
}

function setLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem('lang', lang);
}
