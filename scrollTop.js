//Get the button:
mybutton = document.getElementById("myBtn");
header = document.getElementById("header");
document.getElementById("myBtn").addEventListener("mouseover", mouseOver);
document.getElementById("myBtn").addEventListener("mouseout", mouseOut);


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    header.style.boxShadow = "0px 1px 3px #948F89";
  } else {
    mybutton.style.display = "none";
    header.style.boxShadow = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function mouseOver() {
  document.getElementById("st0").style.fill = "#ffffff";
}
function mouseOut() {
  document.getElementById("st0").style.fill = "#000000";
}