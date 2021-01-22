Swal.fire({
  title: "The Internet Protocol" ,
  imageUrl: 'assets/img/icontransparence.png',
  imageHeight: 200,
  showConfirmButton:false,
  allowOutsideClick: false,
  html: "<div id='loading' >LOADING</div>",
   timer: 7500,
  showClass: {
    popup: 'animated pulse'
  },
  hideClass: {
    popup: 'animated fadeOutUp'
  }
}).then(function() {
    setTimeout(function(){ window.location="main.html"; }, 1000);


});