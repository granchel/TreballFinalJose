export { datosUsuario};
import { datos } from "./exportdatos.js";
import { main2,registros,login,main} from "./viewsmenus.js";

async function datosUsuario(){
    let contenedor= document.querySelector(".divprincipal");
    let arrays = await datos();
    let login= arrays.login;
  
    
  let contenedorvista = "";
    
    document.title= "Datos usuarios";
    
    contenedorvista=`
  <nav class="navbar fixed-top navbar-dark bg-dark">
  <a class="navbar-brand" >Pagina principal</a>
  </nav>
  
  <div class="cabecera">
  
  <p class="parrafocabecera">Datos Usuario</p>
  
  </div>
  <div class="pag">
  
  <div class="container">
    <h1 class="titulop">Datos Usario</h1>
             
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Contraseña</th>
        </tr>
      </thead>
      <tbody>`
      
        for (let i = 0; i < login.length; i++) {
          contenedorvista+=`
        <tr>
          <td>`+login[i].nom+`</td>
          <td>`+login[i].email+`</td>
          <td>`+login[i].password+` </td>
        </tr>
        `
        }
        contenedorvista+=` </tbody>
    </table>
  </div>
  <br>
  
  </div>
  `
  contenedor.innerHTML= contenedorvista;
  let boto2= document.querySelector(".navbar-brand");
  boto2.addEventListener('click',main2);
  
  }
  