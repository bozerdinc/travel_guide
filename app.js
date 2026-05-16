var currentIndex = 0;
var timer = null;
var progress = 0;
var currentAudio = null;

var homeView = document.getElementById('homeView');
var detailView = document.getElementById('detailView');
var cards = document.getElementById('cards');
var empty = document.getElementById('empty');
var search = document.getElementById('search');

function init(){
  if (!window.PLACES && typeof PLACES === 'undefined') {
    alert('data.js could not be loaded. Please keep index.html, app.js, data.js and the assets folder in the same folder.');
    return;
  }
  if (!PLACES || PLACES.length === 0) { return; }
  document.getElementById('heroImg').src = PLACES[0].image;
  document.getElementById('heroTitle').innerHTML = PLACES[0].title;
  document.getElementById('heroCity').innerHTML = PLACES[0].city;
  renderCards();
}

function renderCards(){
  var q = (search.value || '').toLowerCase().trim();
  var result = [];
  for (var i = 0; i < PLACES.length; i++) {
    var p = PLACES[i];
    var searchable = (p.title + ' ' + p.city + ' ' + p.tags.join(' ')).toLowerCase();
    if (searchable.indexOf(q) !== -1) { result.push({ place:p, index:i }); }
  }
  cards.innerHTML = '';
  empty.style.display = result.length ? 'none' : 'block';
  for (var r = 0; r < result.length; r++) {
    var item = result[r];
    var el = document.createElement('article');
    el.className = 'card';
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', 'Open ' + item.place.title);
    el.onclick = (function(index){ return function(){ openPlace(index); }; })(item.index);
    el.onkeydown = (function(index){ return function(e){ if(e.key === 'Enter'){ openPlace(index); } }; })(item.index);
    var tagHtml = '';
    for (var t = 0; t < item.place.tags.length; t++) {
      tagHtml += '<span class="tag">' + escapeHtml(item.place.tags[t]) + '</span>';
    }
    el.innerHTML = '<img src="' + item.place.image + '" alt="' + escapeHtml(item.place.title) + '">' +
      '<div class="card-body"><h3>' + escapeHtml(item.place.title) + '</h3>' +
      '<div class="city">' + escapeHtml(item.place.city) + '</div>' +
      '<div class="tags">' + tagHtml + '</div></div>';
    cards.appendChild(el);
  }
}

function escapeHtml(text){
  return String(text).replace(/[&<>"]/g, function(ch){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch];
  });
}

function showHome(){
  stopNarration();
  detailView.className = detailView.className.replace(' active','');
  if (homeView.className.indexOf('active') === -1) { homeView.className += ' active'; }
}

function openPlace(index){
  currentIndex = (index + PLACES.length) % PLACES.length;
  var p = PLACES[currentIndex];
  stopNarration();
  document.getElementById('detailImg').src = p.image;
  document.getElementById('detailTitle').innerHTML = p.title;
  document.getElementById('detailCity').innerHTML = p.city;
  document.getElementById('script').innerHTML = escapeHtml(p.script).replace(/\n/g, '<br>');
  document.getElementById('bar').style.width = '0%';
  document.getElementById('audioNote').innerHTML = 'Student recording path: <b>' + p.audio + '</b>. If the MP3 file is missing, the browser reads the English text aloud.';
  homeView.className = homeView.className.replace(' active','');
  if (detailView.className.indexOf('active') === -1) { detailView.className += ' active'; }
}

function nextPlace(){ openPlace(currentIndex + 1); }
function prevPlace(){ openPlace(currentIndex - 1); }
function shuffleTour(){ openPlace(Math.floor(Math.random() * PLACES.length)); }

function playNarration(){
  var p = PLACES[currentIndex];
  stopNarration(false);
  currentAudio = new Audio(p.audio);
  currentAudio.onloadeddata = function(){ currentAudio.play(); simulateProgress(currentAudio.duration || 22); };
  currentAudio.onerror = function(){ speakWithBrowser(p.script); };
  currentAudio.onended = function(){ stopProgressOnly(); };
}

function speakWithBrowser(text){
  if(!('speechSynthesis' in window)){
    alert('Speech synthesis is not supported in this browser. Please add an MP3 file to assets/audio.');
    return;
  }
  var utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.86;
  utter.pitch = 1.08;
  var voices = speechSynthesis.getVoices();
  for (var i = 0; i < voices.length; i++) {
    if (voices[i].lang && voices[i].lang.toLowerCase().indexOf('en') === 0) {
      utter.voice = voices[i];
      break;
    }
  }
  utter.onend = function(){ stopProgressOnly(); };
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
  simulateProgress(Math.max(18, text.split(/\s+/).length / 2.2));
}

function pauseNarration(){
  if(currentAudio && !currentAudio.paused) { currentAudio.pause(); }
  if('speechSynthesis' in window) { speechSynthesis.pause(); }
  clearInterval(timer);
}

function stopNarration(reset){
  if (reset === undefined) { reset = true; }
  if(currentAudio){ currentAudio.pause(); currentAudio.currentTime = 0; currentAudio = null; }
  if('speechSynthesis' in window) { speechSynthesis.cancel(); }
  clearInterval(timer);
  timer = null;
  if(reset){ progress = 0; document.getElementById('bar').style.width = '0%'; }
}

function stopProgressOnly(){
  clearInterval(timer);
  document.getElementById('bar').style.width = '100%';
}

function simulateProgress(seconds){
  clearInterval(timer);
  progress = 0;
  var step = 100 / (seconds * 4);
  timer = setInterval(function(){
    progress = Math.min(100, progress + step);
    document.getElementById('bar').style.width = progress + '%';
    if(progress >= 100) { clearInterval(timer); }
  }, 250);
}

function toggleFullScreen(){
  var doc = document;
  var el = document.documentElement;
  var isFull = doc.fullscreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement;
  if(!isFull){
    if(el.requestFullscreen){ el.requestFullscreen(); }
    else if(el.webkitRequestFullscreen){ el.webkitRequestFullscreen(); }
    else if(el.msRequestFullscreen){ el.msRequestFullscreen(); }
  } else {
    if(doc.exitFullscreen){ doc.exitFullscreen(); }
    else if(doc.webkitExitFullscreen){ doc.webkitExitFullscreen(); }
    else if(doc.msExitFullscreen){ doc.msExitFullscreen(); }
  }
}

document.addEventListener('keydown', function(e){
  if(detailView.className.indexOf('active') !== -1){
    if(e.key === 'ArrowRight') { nextPlace(); }
    if(e.key === 'ArrowLeft') { prevPlace(); }
    if(e.key === 'Escape') { showHome(); }
  }
});

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = function(){};
}

init();
