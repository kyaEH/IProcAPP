if(localStorage != undefined)
{
  console.log("Local Storage is supported");

  var chapter1 = [localStorage.getItem("chapter1")];
  var chapter2 = [localStorage.getItem("chapter2.0"),localStorage.getItem("chapter2.1"),localStorage.getItem("chapter22."),localStorage.getItem("chapter2.3"),localStorage.getItem("chapter2.4")];
  var chapter3 = [localStorage.getItem("chapter3.0"),localStorage.getItem("chapter3.1")];
  chapter1.forEach(function(item, index, array) {
    if(chapter1[index]==null){
      localStorage.setItem("chapter1", false);
    }
    else if(chapter1[0]=="true")
    {
      $('#chapter1').append(' <h3>Completed.</h3>');
      $('#chapter2s').attr("onclick","alert('Debloque');");
    }

  });
  chapter2.forEach(function(item, index, array) {
    if(chapter2[index]==null){
      localStorage.setItem("chapter2."+index, false);
    }
  });
  chapter3.forEach(function(item, index, array) {
    if(chapter3[index]==null){
      localStorage.setItem("chapter3."+index, false);
    }
  });
  


/*
  //update or overwrite
  localStorage.setItem("Website", "SitePoint.com");

  //remove
  localStorage.removeItem("Website");

  //remove all
  localStorage.clear();
*/
}
else
{
  console.log("No support");
}