export { main2, registros , login ,main}
import { datos } from "./exportdatos.js";
import { ChartMaker,validar,Galletes } from "./javatreballfinal.js";
import { datosUsuario } from "./viewsdatos.js";
import { estadistica,panel,moli,central } from "./viewsestadisticas.js";
import { descargar, makeRequest, makeRequest2 } from "./requests.js";
//Funcions
function main(){
  console.log("main");
   document.title= "Pag Principal";
   let contenedor= document.querySelector(".divprincipal");
   console.log(contenedor);
   contenedor.innerHTML=`
<nav class="navbar fixed-top navbar-dark bg-dark">
<a class="navbar-brand"> Inicio Sesion</a>
</nav>

<div class="cabecera">

<p class="parrafocabecera">Treball Final Vicent</p>

</div>
<div class="pag">
<br>
<h1 class="titulop">Pagina inicio</h1>
<br>
<div class="container">
<div id="demo" class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators">
   <li data-target="#demo" data-slide-to="0" class="active"></li>
   <li data-target="#demo" data-slide-to="1"></li>
   <li data-target="#demo" data-slide-to="2"></li>
 </ul>

 
 <div class="carousel-inner" >
   <div class="carousel-item active">
     <img src="../img/placa2.jpg" alt="placa">
   </div>
   <div class="carousel-item">
     <img src="../img/molinoviento2.jpg" alt="molino">
   </div>
   <div class="carousel-item">
     <img src="../img/Central2.jpg" widtg="500" height="500" alt="central">
   </div>
 </div>
 

 <!-- Left and right controls -->
 <a class="carousel-control-prev" href="#demo" data-slide="prev">
   <span class="carousel-control-prev-icon"></span>
 </a>
 <a class="carousel-control-next" href="#demo" data-slide="next">
   <span class="carousel-control-next-icon"></span>
 </a>


 <br><br>
</div>

</div>

</div>
<div class="pie">

<p class="parrafopie">Treball Final Vicent</p>

</div>
`
 

   let boto2= document.querySelector(".navbar-brand");
   boto2.addEventListener('click',login);
   
}
//Funcions
async function main2(){
  let arrays = await datos();
   
  let grafics= arrays.grafics;
  document.title= "Pag Principal";
  let contenedor= document.querySelector(".divprincipal");
  contenedor.innerHTML=`
<nav class="navbar fixed-top navbar-dark bg-dark">
<a class="navbar-brand" id="cerrar" >Cerrar Session</a>
<a class="navbar-brand" id="estadistica" >Estadística Semanal</a>
<a class="navbar-brand" id="datosusuario" >Datos Usuario</a>


</nav>

<div class="cabecera">

<p class="parrafocabecera">Treball Final Vicent</p>

</div>
<div class="pag">

<br>
<br>
<h1 class="titulop">Mitja General</h1>
<br>
<br>
<div id="canvas" >

<h2 class="titulop">Mitja Panels:</h2>

<div class"container">
<canvas id="OverviewChart"></canvas>
</div>

<h2 class="titulop">Mitja Molins:</h2>

<div class"container">
<canvas id="OverviewChart2"></canvas>
</div>

<h2 class="titulop">Mitja Central:</h2>
<div class"container">
<canvas id="OverviewChart3"></canvas>

</div>
</div>
<br>
</div>
<div class="pie">



</div>
`
  ChartMaker.doughnutChart([grafics.grafic1.produit,grafics.grafic1.perdut,grafics.grafic1.consumit],"#OverviewChart");
  ChartMaker.doughnutChart([grafics.grafic2.produit,grafics.grafic2.perdut,grafics.grafic2.consumit],"#OverviewChart2");
  ChartMaker.doughnutChart([grafics.grafic3.produit,grafics.grafic3.perdut,grafics.grafic3.consumit],"#OverviewChart3");
  let boto3= document.querySelector("#estadistica");
  boto3.addEventListener('click',estadistica);
  
  let boto4= document.querySelector("#datosusuario");
  boto4.addEventListener('click',datosUsuario);

  let boto5= document.querySelector("#cerrar");
  boto5.addEventListener('click',Galletes.eliminargalleta);
}
//Funcions
function registros(){
  console.log("Registro");
   document.title= "Registro";
   let contenedor= document.querySelector(".divprincipal");
   console.log(contenedor);
   contenedor.innerHTML=`

<form class="form-signin">

   <div class="pag">


     <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsH_SP1Z0sGr5k1dnAxDRB3sVEb8-4dXHDRw&usqp=CAU" alt="" width="72" height="72">
       <div class="container">
     <h1 class="titulop">Registro</h1>

     <label for="inputEmail" class="sr-only">Email address</label>

     <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
       
     <br>

     <label for="inputPassword" class="sr-only">Password</label>

     <input type="password" class="form-control" placeholder="Password" required>

     <input type="password" class="form-control" placeholder="confirm Password" required>

     <div class="checkbox mb-3">
       <br>
       <label>
         <input type="checkbox" value="remember-me"> Remember me
       </label>

       <button class="btn btn-lg btn-primary btn-block" >Sign in</button>
      
     </div>
     </div>

    

     <p class="fecha">&copy; 2020-2021</p>

</form>`
   
   let form= document.querySelector(".form-signin");
   form.addEventListener('submit',login);

  
}
//Funcions
function login(){
   console.log("login");
    document.title= "Login";
    let contenedor= document.querySelector(".divprincipal");
    console.log(contenedor);
    contenedor.innerHTML=`

<form class="form-signin">

    <div class="pag">


      <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsH_SP1Z0sGr5k1dnAxDRB3sVEb8-4dXHDRw&usqp=CAU" alt="" width="72" height="72">
        <div class="container">
      <h1 class="titulop">Please sign in</h1>

      <label for="inputEmail" class="sr-only">Email address</label>

      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        
      <br>

      <label for="inputPassword" class="sr-only">Password</label>

      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>

      <div class="checkbox mb-3">
        <br>
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>

        <button class="btn btn-lg btn-primary btn-block" >Sign in</button>
        <a class="linkregistro" >registrarse</a>
      </div>
      </div>

     

      <p class="fecha">&copy; 2020-2021</p>

</form>`
    
    let form= document.querySelector(".form-signin");
    form.addEventListener('submit',validar);

    let registro= document.querySelector(".linkregistro");
    registro.addEventListener('click',registros);
}