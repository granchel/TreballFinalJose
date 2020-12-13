export { cridarEnviar };

function json(response) { return response.json()  }

let fetchOptions = {
    method: 'post',
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: '{}'
  };

//obtingut,perdut,consumit,hores
function cridarEnviar(){

  let obtingut= document.querySelector("#obtingut").value;
  let perdut= document.querySelector("#perdut").value;
  let consumit= document.querySelector("#consumit").value;
  let hores= document.querySelector("#hores").value;

 //formData
  var formData = new FormData();

  formData.append("obtingut", obtingut);
  formData.append("perdut", perdut);
  formData.append("consumit", consumit);
  formData.append("hores", hores);

  return enviar('localhost/create',  // URL és un atribut estàtic
            formData,
            (response) => {console.log(response)},
            (error) => console.log(error)
  );
}

function enviar(url,datos,exito,fracaso){
  console.log("entre en enviar "+datos.get("obtingut")+" "+datos.get("perdut")+" "+datos.get("consumit")+" "+datos.get("hores"))
  let fetchOptionsEnviar = {
    method: fetchOptions.method,
    headers: fetchOptions.headers,
    body: `{"jsonrpc":"2.0","method":"call","params":${datos}}`
  }
//console.log(url,fetchOptionsEnviar.body);
  return fetch(url, fetchOptionsEnviar)
  .then(json).then(exito)
  .catch(fracaso);
}
