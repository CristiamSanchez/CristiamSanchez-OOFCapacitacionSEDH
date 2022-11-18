
function continuar(paso) {
  switch (paso) {
    case "1":
      document.getElementById("card1").style.display = "block";
      
      document.getElementById("card2").style.display = "none";
      document.getElementById("card4").style.display = "none";
      document.getElementById("card3").style.display = "none";
      break;
    case "2":
      document.getElementById("card1").style.display = "none";
      document.getElementById("card2").style.display = "block";
      
      document.getElementById("card3").style.display = "none";
      document.getElementById("card4").style.display = "none";
      break;
    case "3":
      document.getElementById("card1").style.display = "none";
      document.getElementById("card2").style.display = "none";
      document.getElementById("card3").style.display = "block";
         
      document.getElementById("card4").style.display = "none";

      break;
    case "4":
      document.getElementById("card1").style.display = "none";
      document.getElementById("card2").style.display = "none";
      document.getElementById("card3").style.display = "none";
      document.getElementById("card4").style.display = "block";
 

      break;
    default:
      break;
  }
  return false;
}









