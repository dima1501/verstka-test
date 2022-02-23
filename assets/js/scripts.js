var demoOpener = document.getElementById('demoOpener');
var btnScreen = document.getElementById('btnScreen');
var sliderScreen = document.getElementById('sliderScreen');

demoOpener.onclick = function () {
  demoOpener.classList.toggle('-fade');
  var load = setTimeout(function () {
    btnScreen.classList.toggle('-hidden');
    sliderScreen.classList.toggle('-visible');
    clearTimeout(load);
  }, 5000);
};

new Glide('.glide').mount();
