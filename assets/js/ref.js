// Funcao geradora da referencia

function refFun(r, r1, r2, r3) {

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


//gerador de numeros
function gerador(limite) {
   
   let geradorAleatorio = Math.round(Math.random()*limite)
   
   return geradorAleatorio;
}

//foto de conclusao
function getsFotoUpdate() {
   ima = document.querySelector('.imagem')
   ima.src = '/assets/img/donogreen.png'
   ima.width = "18px";

   setTimeout(function() {
      // Tab to edit
      window.location.href = " /home.index.html"
   }, 3000)

}

//funcao data
function date(dia, mes , ano) {
         
         return `${dia}/${mes}/${ano}`
}
     
     
     let refe = document.querySelector("#refer")
     let numeroOperacao = document.querySelector("#numoperacao")

      let imagem = document.getElementById("imagem")

      let valor_texto = document.querySelector("#valor_texto")

      let dataoperacao = document.querySelector("#dataoperacao")


//funcao main
function codeUpdate() {
   let ref 
   let ref1 
   let ref2
   let ref3
   let havar = gerador(150000)
   
   if (havar == null) {
      console.log('Vazio')
   }

   let data = new Date()
   
   let dia = (data.getDay() * 4) +2

   let mes = data.getMonth() + 1

   let ano = data.getFullYear()

   let dadosFim = {

      referenciaOut: refFun(ref,ref1,ref2,ref3),

      data: date(dia, mes, ano),

      numeroOperacao: gerador(500)

   }

   refe.value = ` ${dadosFim.referenciaOut}`
   refe.style.background = " #000";
   refe.style.color = "gold"

   valor_texto.value = `${havar} kzs`
   valor_texto.style.background = " #000";
   valor_texto.style.color = "gold"

   numeroOperacao.value = `${dadosFim.numeroOperacao}`
   numeroOperacao.style.background = " #000";
   numeroOperacao.style.color = "gold"

   dataoperacao.innerHTML = `${dadosFim.data}`

}


function botaoExpress() {
   // Funcao responsavel por voltar na tela anterior do layout do express
   location.src = "/home.index.html"
} 