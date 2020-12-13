export { descargar, makeRequest, makeRequest2}

function descargar(url){
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onreadystatechange = function (aEvt) {
if (xhr.readyState == 4) {
   if(xhr.status == 200)
    console.log(xhr.responseText);
   else
    console.log("Error loading page\n");
}
};
xhr.send(null);
}

function makeRequest (method, url, done) {
       var xhr = new XMLHttpRequest();
       xhr.open(method, url);
       xhr.onload = function () {   done(null, xhr.response); };
       xhr.onerror = function () {   done(xhr.response); };
       xhr.send();
      }

function makeRequest2 (method, url, formdata, done) {
             var xhr = new XMLHttpRequest();
             xhr.open(method, url);
             xhr.onload = function () {   done(null, xhr.response); };
             xhr.onerror = function () {   done(xhr.response); };
             xhr.send(formdata);
}
