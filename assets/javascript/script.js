// header hero
VANTA.WAVES({
    el: '#vanta-canvas',
    waveHeight: 20,
    shininess: 50,
    waveSpeed: 1.5,
    mouseControls: true,
    ouchControls: true,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x102,
});


document.addEventListener('click', function (event) {
if(event.target.classList.contains("gallery-item")){
  const src = event.target.getAttribute('src');
  document.querySelector(".modal-img").src = src;
  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
  myModal.show();

}
});

const blog = document.querySelector('#blog').addEventListener('submit', blog);