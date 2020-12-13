import { main2,registros,login,main} from "./viewsmenus.js";
import { datosUsuario } from "./viewsdatos.js";
import { estadistica,panel,moli,central } from "./viewsestadisticas.js";
import { datos } from "./exportdatos.js";
import { Usuarios } from "./usuarios.js";
export { ChartMaker,validar,Galletes }

//Cookies i LocalStorage
//Classes
class Galletes { 
 static setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Variables let i const
static eliminargalleta(){
  let galleta= Galletes.getCookie("username");
  galleta = document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   
  main();
}

static getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

 static checkCookie() {
  var user = Galletes.getCookie("username");
  if (user != "") {
    return true;
  } else {
    return false;
    }
  }
}

//Classes
class ChartMaker{

  static doughnutChart(data,id){

     
let chartData = {
  
  labels: [
      "Produit",
      "Perdut",
      "Consumit",
      
  ],
  datasets: [
      {
          data: data,
          backgroundColor: [
              "#63FF84",
              "#FFFF00",
              "#FF6384"
              
          ],
          borderColor: "black",
          borderWidth: 1
      }]
};

    let node = document.querySelector(id);
    let options = {
      responsive: true,
      maintainAspectRatio: false,
      rotation: -Math.PI,
      cutoutPercentage: 30,
      circumference: Math.PI,
      legend: {
        position: 'bottom'
      },
      animation: {
        animateRotate: true,
        animateScale: false
      }
    };

    let myDoughnutChart = new Chart(node, {
      type: 'doughnut',
      data: chartData,
      options: options
  });
  }
}
//Funcions
let usuariClass;
async function validar(e){ //Declaració de funció
  e.preventDefault()
  let arrays = await datos();
  let login= arrays.login;
  let stringElements= JSON.stringify(login);
  let usuarioObject = JSON.parse(stringElements);

    let email = document.querySelector("#inputEmail").value;
    let con = document.querySelector("#inputPassword").value;
    
    usuarioObject.forEach(element => { //Iterables
    if(email == element.email && con== element.password ){
      usuariClass = Object.assign(new Usuarios, element);
      Galletes.setCookie("username",element.nom,7);
     main2();
    }
  });
    
}

//Registre d'events W3C
 window.addEventListener("load", function () {
      //use strict  
      "use strict" 
  if (Galletes.checkCookie("usename")) {
           main2()
         }else{
          main();
         }
         
    
});

