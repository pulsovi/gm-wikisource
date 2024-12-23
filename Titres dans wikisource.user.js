// ==UserScript==
// @name     Titres dans wikisource
// @version  1
// @include  https://he.wikisource.org/wiki/*
// @grant    none
// ==/UserScript==


/**
 * Menu principal
 */
(function MenuPrincipalIIFE(){
  var menu = document.getElementById('pt-anontalk').parentElement;
  
  function createLi(title, link, balise){
    balise = balise || 'li';
    var li = document.createElement(balise);
    var label = document.createTextNode(title);
    if(link){
      var a = document.createElement('a');
      a.href = link;
      a.style.decoration = 'none';
      a.appendChild(label);
      li.appendChild(a);
    } else {
      li.appendChild(label);
    }
    return li;
  }
  function addToMenu(li){
    li.style.display = 'inline-block';
    li.style.marginRight = "1em";
    menu.appendChild(li);
  }
  function addMenuItem(title, link){
    addToMenu(createLi(title, link));
  }
  function addMenu(title, linkListObj){
    var head = document.createElement('div');
    var label = head.appendChild(document.createElement('label'));
    label.appendChild(document.createTextNode(title));
    var ul = head.appendChild(document.createElement('ul'));
    var keys = Object.keys(linkListObj);
    keys.forEach(function(title){
      var href = linkListObj[title];
      ul.appendChild(createLi(title, href));
    });
    ul.style.display = 'none';
    label.onclick = function(){
      ul.style.display = ul.style.display == 'block' ? 'none' : 'block';
    };
    addToMenu(head);
  }
  addMenuItem('שס', 'https://he.wikisource.org/wiki/%D7%AA%D7%9C%D7%9E%D7%95%D7%93_%D7%91%D7%91%D7%9C%D7%99');
  addMenu('יום טוב', {
    'טור': 'https://he.wikisource.org/wiki/%D7%98%D7%95%D7%A8_%D7%90%D7%95%D7%A8%D7%97_%D7%97%D7%99%D7%99%D7%9D#%D7%94%D7%9C%D7%9B%D7%95%D7%AA_%D7%99%D7%95%D7%9D_%D7%98%D7%95%D7%91',
    'שולחן ערוך': 'https://he.wikisource.org/wiki/%D7%A9%D7%95%D7%9C%D7%97%D7%9F_%D7%A2%D7%A8%D7%95%D7%9A_%D7%90%D7%95%D7%A8%D7%97_%D7%97%D7%99%D7%99%D7%9D#%D7%94%D7%9C%D7%9B%D7%95%D7%AA_%D7%99%D7%95%D7%9D_%D7%98%D7%95%D7%91',
    'משנה ברורה': 'https://he.wikisource.org/wiki/%D7%9E%D7%A9%D7%A0%D7%94_%D7%91%D7%A8%D7%95%D7%A8%D7%94#%D7%94%D7%9C%D7%9B%D7%95%D7%AA_%D7%99%D7%95%D7%9D_%D7%98%D7%95%D7%91',
    'ביאור הלכה': 'https://he.wikisource.org/wiki/%D7%91%D7%99%D7%90%D7%95%D7%A8_%D7%94%D7%9C%D7%9B%D7%94#%D7%94%D7%9C%D7%9B%D7%95%D7%AA_%D7%99%D7%95%D7%9D_%D7%98%D7%95%D7%91'
  });
  addMenu('קידושין', {
    'שולחן ערוך': 'https://he.wikisource.org/wiki/%D7%A9%D7%95%D7%9C%D7%97%D7%9F_%D7%A2%D7%A8%D7%95%D7%9A_%D7%90%D7%91%D7%9F_%D7%94%D7%A2%D7%96%D7%A8#%D7%94%D7%9C%D7%9B%D7%95%D7%AA_%D7%A7%D7%99%D7%93%D7%95%D7%A9%D7%99%D7%9F',
  });
  addMenu('גיטין', {
    'שולחן ערוך': 'https://he.wikisource.org/wiki/%D7%A9%D7%95%D7%9C%D7%97%D7%9F_%D7%A2%D7%A8%D7%95%D7%9A_%D7%90%D7%91%D7%9F_%D7%94%D7%A2%D7%96%D7%A8#%D7%94%D7%9C%D7%9B%D7%95%D7%AA_%D7%92%D7%99%D7%98%D7%99%D7%9F',
  });
}());

var adress = location.pathname;

/**
 * שולחן ערוך
 */
if (0 === adress.indexOf('/wiki/%D7%A9%D7%95%D7%9C%D7%97%D7%9F_%D7%A2%D7%A8%D7%95%D7%9A')) {
  document.querySelectorAll('.mw-headline a').forEach(function(e){
    e.innerText = e.title + ':';
  });
}