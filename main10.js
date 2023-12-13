var compteur =0;
var compteur2 = 0;

var MaDivNum1 = document.getElementById("MaDivNum1");
MaDivNum1.addEventListener("click",UneProcedureQuiChangeLetext);

function UneProcedureQuiChangeLetext(element){
    compteur++;
    element.target.innerHTML = "On m'a cliqué dessus : "+compteur+" fois";
    if (element.className == "active") {
        element.className = "inactive";
      } else {
        element.className = "active";
      }

}


