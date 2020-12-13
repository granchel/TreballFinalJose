export { datos }

//Promises
//Funcions fletxa
//Selectors
async function datos(){
    let array= {}
    await fetch('./java/datos.json')
    .then(response => response.json())
    .then(dato=> array = dato )
  
    return array;
}