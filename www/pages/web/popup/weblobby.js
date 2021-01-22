Swal.fire({
  title: 'Sécurité web!',
  html: "Choisissez un cours ci-dessous<br><br><button class='swal2-styled swal2-confirm' onclick='window.location=`cours1.html`'>Introduction</button><br><button class='swal2-styled swal2-confirm'>Le langage javascript</button><br><button class='swal2-styled swal2-confirm'>Le langage PHP</button><br><button class='swal2-styled swal2-confirm'>Les injections SQL</button><br><button class='swal2-styled swal2-confirm'>Les failles XSS</button><br><button class='swal2-styled swal2-cancel' onclick='window.location=\"../../main.html\";'>Retour</button>",
  showConfirmButton: false,
  showClass: {
    popup: 'animated jackInTheBox'
  },
  hideClass: {
    popup: 'animated fadeOutUp'
  }
}).then(function() {
    setTimeout(function(){ 
    	window.location="main.html"; 
    }, 1000);
});