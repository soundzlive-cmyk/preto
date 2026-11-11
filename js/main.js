// Mobile menu
document.querySelectorAll('.nav-toggle').forEach(function(btn){
  var nav = btn.parentElement.querySelector('nav.links');
  btn.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});

// Menu tabs (menu page)
(function(){
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.mtab'));
  if(!tabs.length) return;
  function show(t){
    tabs.forEach(function(x){
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function(t, i){
    t.addEventListener('click', function(){ show(t); });
    t.addEventListener('keydown', function(e){
      if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        show(n); n.focus();
      }
    });
  });
})();

// Join the Club (contact page): opens the visitor's email app addressed to the restaurant
(function(){
  var form = document.getElementById('club-form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var email = document.getElementById('club-email').value;
    location.href = 'mailto:info@pretosisland.com?subject=' + encodeURIComponent('Join the Club') +
      '&body=' + encodeURIComponent('Please add me to the mailing list: ' + email);
  });
})();
