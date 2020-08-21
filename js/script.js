let cursor = document.querySelector('.cursor');
let mm = new MagnetMouse({ 
magnet: {
element: '.magnet',
class: 'magnet-active',
position: 'center',
distance: 20,
},
follow: {
element: '.cursor',
class: 'cursor-active'
},
inCallback: function(data) {
cursor.style.width = data.elem.width;
cursor.style.height = data.elem.height;
cursor.style.opacity = 0;
},
outCallback: function(data) {
cursor.style.width = 2 + 'rem';
cursor.style.height = 2 + 'rem';
cursor.style.opacity = 1;
},
}); 
mm.init();


var sidebar = document.querySelector("#sidebar");
window.addEventListener("touchmove", function(e) {
  sidebar.style.backgroundPositionX = (e.touches[0].clientX / window.outerWidth) * 100 + "%";
  sidebar.style.backgroundPositionY = (e.touches[0].clientY / window.outerHeight) * 100 + "%";
});
window.addEventListener("mousemove", function(e) {
  sidebar.style.backgroundPositionX = (e.clientX / window.outerWidth) * 100 + "%";
  sidebarr.style.backgroundPositionY = (e.clientY / window.outerHeight) * 100 + "%";
});

var preloader = document.querySelector('.preload');
window.addEventListener("load", function() {
  setTimeout(() => {
    preloader.classList.add('loaded');
  }, 500);
});