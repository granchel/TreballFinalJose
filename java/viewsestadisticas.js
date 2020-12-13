export { estadistica,panel,moli,central}
import { datos } from "./exportdatos.js";
import { main2,registros,login,main} from "./viewsmenus.js";
import { cridarEnviar } from "./peticions.js";

//Funcions
async function estadistica(){
    let arrays = await datos();
    let datosdias= arrays.arraydias;
    document.title= "Estadistica";
    let contenedor= document.querySelector(".divprincipal");
    contenedor.innerHTML=`
<nav class="navbar fixed-top navbar-dark bg-dark">
<a class="navbar-brand" >Pagina principal</a>
<a class="navbar-brand" id="panelsolar" >Panels Solars</a>
<a class="navbar-brand" id="moli">Molins De  Vent</a>
<a class="navbar-brand" id="central" >Central Hidroeléctrica</a>
</nav>

<div class="cabecera">



</div>
<div class="pag2">

<div class="div1">
    <h1 class="titulop">Dilluns</h1>
   <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[0].Obtingut+`%">
    Obtingut `+datosdias[0].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[0].perdut+`%">
    Perdut `+datosdias[0].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[0].Gastat+`%">
    Gastat `+datosdias[0].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div2">
    <h1 class="titulop">Dimarts</h1>
 <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[1].Obtingut+`%">
    Obtingut `+datosdias[1].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[1].perdut+`%">
    Perdut `+datosdias[1].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[1].Gastat+`%">
    Consumit `+datosdias[1].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div3">
    <h1 class="titulop">Dimecres</h1>
    <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[2].Obtingut+`%">
    Obtingut `+datosdias[2].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[2].perdut+`%">
    Perdut `+datosdias[2].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[2].Gastat+`%">
    Consumit `+datosdias[2].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div4">
    <h1 class="titulop">Dijous</h1>
   <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[3].Obtingut+`%">
    Obtingut `+datosdias[3].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[3].perdut+`%">
    Perdut `+datosdias[3].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[3].Gastat+`%">
    Consumit `+datosdias[3].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div5">
    <h1 class="titulop">Divendres</h1>
   <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[4].Obtingut+`%">
    Obtingut `+datosdias[4].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[4].perdut+`%">
    Perdut `+datosdias[4].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[4].Gastat+`%">
    Consumit `+datosdias[4].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div6">
    <h1 class="titulop">Disabte</h1>
   <div class="container p-3">
 <div class="progress" >

<div class="progress-bar bg-success" style="width:`+datosdias[5].Obtingut+`%">
    Obtingut `+datosdias[5].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[5].perdut+`%">
    Perdut `+datosdias[5].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[5].Gastat+`%">
    Consumit `+datosdias[5].Gastat+`%
  </div>

  </div>
</div>
</div>

<div class="div7">
    <h1 class="titulop">Diumenge</h1>
   <div class="container p-3">
 <div class="progress" >

    <div class="progress-bar bg-success" style="width:`+datosdias[6].Obtingut+`%">
    Obtingut `+datosdias[6].Obtingut+`%
  </div>
  <div class="progress-bar bg-warning" style="width:`+datosdias[6].perdut+`%">
    Perdut `+datosdias[6].perdut+`%
  </div>
  <div class="progress-bar bg-danger" style="width:`+datosdias[6].Gastat+`%">
    Consumit `+datosdias[6].Gastat+`%
  </div>

  </div>
</div>
</div>

</div>
<div class="pie">



</div>
`
    let boto2= document.querySelector(".navbar-brand");
    boto2.addEventListener('click',main2);//Registre d'events W3C

    let boto3= document.querySelector("#panelsolar");
    boto3.addEventListener('click',panel);

    let boto4= document.querySelector("#moli");
    boto4.addEventListener('click',moli);

    let boto5= document.querySelector("#central");
    boto5.addEventListener('click',central);

}



async function panel() {

    let arrays = await datos();
    let datospanel= arrays.panels;

    document.title= "Panels Solars";
    let contenedor= document.querySelector(".divprincipal");
    contenedor.innerHTML=`
    <nav class="navbar fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" >Pagina principal</a>
    </nav>

    <div class="cabecera">

    <p class="parrafocabecera">Treball Final Vicent</p>

    </div>
    <div class="pag">
    <br>
    <h1 class="titulop">Panels Solars</h1>
    <br>

    <div class="divplacacentral">
    <div class="divplaca">
     <h2 class="titulop">Panel 1</h2>
     <h3 class="titulop">Obtingut: </h3> <p class="titulop">`+datospanel[0].obtingut+`</p>
     <h3 class="titulop">Perdut: </h3> <p class="titulop">`+datospanel[0].perdut+`</p>
     <h3 class="titulop">Consumit: </h3> <p class="titulop">`+datospanel[0].consumit+`</p>
     <h3 class="titulop">HoresDeSol: </h3> <p class="titulop">`+datospanel[0].horessol+`</p>
    </div>

     <div class="divplaca">
      <h2 class="titulop">Panel 2</h2>
      <h3 class="titulop">Obtingut: </h3> <p class="titulop">`+datospanel[1].obtingut+`</p>
      <h3 class="titulop">Perdut: </h3> <p class="titulop">`+datospanel[1].perdut+`</p>
      <h3 class="titulop">Consumit: </h3> <p class="titulop">`+datospanel[1].consumit+`</p>
      <h3 class="titulop">HoresDeSol: </h3> <p class="titulop">`+datospanel[1].horessol+`</p>
     </div>

    <div class="divplaca">
      <h2 class="titulop">Panel 3</h2>
      <h3 class="titulop">Obtingut: </h3> <p class="titulop">`+datospanel[2].obtingut+`</p>
      <h3 class="titulop">Perdut: </h3> <p class="titulop">`+datospanel[2].perdut+`</p>
      <h3 class="titulop">Consumit: </h3> <p class="titulop">`+datospanel[2].consumit+`</p>
      <h3 class="titulop">HoresDeSol: </h3> <p class="titulop">`+datospanel[2].horessol+`</p>
    </div>

    </div>

    <div class="botons">
    <a class="crear" ><input type="submit" value="Crear Placa"> </a>
    <input type="submit" value="Eliminar Placa">
    <input type="submit" value="Modificar Placa">
    </div>

    </div>



  `
  let boto2= document.querySelector(".navbar-brand");
  boto2.addEventListener('click',estadistica);

  let boto3= document.querySelector(".crear");
  boto3.addEventListener('click',crearPanel);

  }
  function crearPanel() {

    document.title= "Crear Panels Solars";
    let contenedor= document.querySelector(".divprincipal");
    contenedor.innerHTML=`
    <nav class="navbar fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" >Panels Solars</a>
    </nav>

    <form>
    <div class="pag">
    <h1 class="titulop">Nova Placa</h1>


  <label for="obtingut">Obtingut:</label><br>
  <input type="numbre" id="obtingut" name="obtingut" placeholder="Obtingut"><br>
  <label for="perdut">Perdut:</label><br>
  <input type="text" id="perdut" name="perdut" placeholder="Perdut"><br>
  <label for="consumit">Consumit:</label><br>
  <input type="text" id="consumit" name="consumit"  placeholder="Consumit"><br>
  <label for="hores">HoresDeSol:</label><br>
  <input type="text" id="hores" name="hores"   placeholder="HoresDeSol"><br>
  <input type="button" id="boto" value="Enviar">



</div>

</form>`



let boto2= document.querySelector(".navbar-brand");
boto2.addEventListener('click',panel);

let boto3= document.querySelector("#boto");
boto3.addEventListener('click',cridarEnviar);

}


  function moli() {
    document.title= "Moli De Vent";
    let contenedor= document.querySelector(".divprincipal");
    contenedor.innerHTML=`
    <nav class="navbar fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" >Pagina principal</a>
    </nav>

    <div class="cabecera">

    <p class="parrafocabecera">Treball Final Vicent</p>

    </div>
    <div class="pag">
    <br>
    <h1 class="titulop">Molins De Vent</h1>
    <br>


      </div>
        <h2>Moli 1</h2>
      </div>

      </div>
        <h2>Moli 2</h2>
      </div>

      </div>
       <h2>Moli 3</h2>
      </div>

    </div>


    <div class="pie">

    <p class="parrafopie">Treball Final Vicent</p>


  </div>
  `
  let boto2= document.querySelector(".navbar-brand");
  boto2.addEventListener('click',estadistica);

  }


  function central() {
    document.title= "Central";
    let contenedor= document.querySelector(".divprincipal");
    contenedor.innerHTML=`
    <nav class="navbar fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" >Pagina principal</a>
    </nav>

    <div class="cabecera">

    <p class="parrafocabecera">Treball Final Vicent</p>

    </div>
    <div class="pag">
    <br>
    <h1 class="titulop">Centrals</h1>
    <br>


    </div>
      h2>Central 1</h2>
    </div>

    </div>
      <h2>Central 2</h2>
    </div>

    </div>
     <h2>Central 3</h2>
    </div>



    </div>


    <div class="pie">

    <p class="parrafopie">Treball Final Vicent</p>


  </div>
  `
  let boto2= document.querySelector(".navbar-brand");
  boto2.addEventListener('click',estadistica);

  }
