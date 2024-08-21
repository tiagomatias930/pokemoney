function getsFoto() {
   ima = document.querySelector('.imagem')
   ima.src= '/assets/img/donogreen.png'
   
   setTimeout(function () {
      // Tab to edit
      window.location.href = " /home.index.html"
   },3000)

}


let havalor = gerador(150000);

function fim1(havalor){
   
   
   
   if(havalor > 150000) {
      
       alert("ERRO!! Quantidade Acima do Valor Aceite")
   }
   
   if ( havalor < 999) {
      
     havalor = gerador(150000)
     
     if (havalor < 1000) {
        havalor = gerador(150000)
     } 
     
   } else {
      
      window.location.href = " /layoutc.index.html"
   }

   return havalor;
}


function gerador(limite) {
   
   let geradorAleatorio = Math.round(Math.random()*limite)
   
   return geradorAleatorio;
}




//let contadorDigito = 0
 
 const pinSecreto = parseInt(document.querySelector(".pinSe"))
 
//function clicar () {
   
/*   while(pin != 0) {
      pin = pin / 10;
      console.log(contadorDigito)
      contadorDigito++;
   }
   
   if (contadorDigito < 3 ) {
      
      alert("ERRO!! Valor Insuficiente")
      alert("Verifica se o Pin tem 3 Digitos")

   }else if (contadorDigito == 3) {
   
      window.location.href = " /layoutc.index.html"
   }
   */
//   const valorDesejado = Number(document.getElementById("din"))


//A ultima parte do layout

function refFun( r,r1,r2,r3) {

   r = gerador(999)

   r1 = gerador(999)

   r2 = gerador(999)

   r3 = gerador(9)

   if (r < 100 || r1 < 100 || r2 < 100) {

      r = gerador(999)
      r1 = gerador(999)
      r2 = gerador(999)

      return `${r}  ${r1}  ${r2}  ${r3}`

   } else {

      return `${r}  ${r1}  ${r2}  ${r3}`
   }
}


