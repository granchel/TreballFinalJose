export { estadistica,panel,moli,central}
import { datos } from "./exportdatos.js";
import { main2,registros,login,main} from "./viewsmenus.js";

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
    boto2.addEventListener('click',main2);

    let boto3= document.querySelector("#panelsolar");
    boto3.addEventListener('click',panel);

    let boto4= document.querySelector("#moli");
    boto4.addEventListener('click',moli);

    let boto5= document.querySelector("#central");
    boto5.addEventListener('click',central);

}



function panel() {
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
    <h1 class="titulop">solar</h1>
    <br>
  
    </div>
    
    </div>
    
    </div>
    <div class="pie">
    
    <p class="parrafopie">Treball Final Vicent</p>
    
  
  </div>
  `
  let boto2= document.querySelector(".navbar-brand");
  boto2.addEventListener('click',estadistica);
  
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
    <h1 class="titulop">Moli</h1>
    <br>
  
    </div>
    
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
    <h1 class="titulop">central</h1>
    <br>
  
    </div>
    
    </div>
    
    </div>
    <div class="pie">
    
    <p class="parrafopie">Treball Final Vicent</p>
    
  
  </div>
  `
  let boto2= document.querySelector(".navbar-brand");
  boto2.addEventListener('click',estadistica);
  
  }