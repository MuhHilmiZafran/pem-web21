//alert fitur yang belum tersedia
var Alert = () => alert('Maaf, fitur ini belum tersedia.');

//alert formulir alamat
function alamatAlert() {
  var yakin = confirm('Apakah anda yakin data anda sudah benar?');
  if (yakin) {
    window.location = 'pembayaran.html';
  } else {
    window.location = 'formalamat.html';
  }
}

//untuk form pembayaran
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
