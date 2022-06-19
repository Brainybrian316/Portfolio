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


async function ContactFormHandler(event) {

  event.preventDefault();

  const Name = document.querySelector('#Name').value.trim();
  const Email = document.querySelector('#Email').value.trim();
  const Message = document.querySelector('#Message').value.trim();


  const response = await fetch(`https://sheet.best/api/sheets/795a5608-86fa-46c6-837c-a80a0f1cc0ac`, {
      method: 'post',
      body: JSON.stringify({
        Name,
        Email,
        Message
      }),
      headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
      document.location.replace('/');
  } else {
      alert(response.statusText);
  }
}

document.querySelector('.contact-form').addEventListener('submit', ContactFormHandler);


