
  var blogheading;

function display() {
  // DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
  // message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
  // message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
  // message += "<li><b>PHONE: </b>" + document.form1.phone.value + "</ul>";
  // DispWin.document.write(message);

  blogheading= document.form1.yourname.value;
  console.log(blogheading);
  window.location.href='index.html';
  const list = document.getElementsByTagName("h1");
  console.log(list);
  var bheadingid=document.getElementById("bhead1");
  console.log(bheadingid);
  bheadingid.innerHTML=list;



}