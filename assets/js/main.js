const formula = document.querySelector("form")

let ref1 = Math.round(Math.random()*100000)

let indentificadorBanco = Math.round(Math.random()*22)

const imagem = document.getElementById("logobank")

let indiceNome = indentificadorBanco

let nomeBanco = document.getElementById("nameBank")

let numeroConta = document.getElementById("numConta")

let id = document.getElementById("Id")

let nomes_contas =['Banco Angolano de Investimento ', 'Banco Angola de Negócios e Comércio', 'BIC Angola','Banco Comercial Angolano', 'Banco de Comércio e Indústria', 'Banco de Desenvolvimento  de Angola', 'Banco Economico', 'Banco de Formento Angola', 'Banco de Investimento  Rural', 'Banco de Poupança e Crédito ', 'Banco de Negócios  Internacional ', ' Banco KLeve', 'Banco prestígio  S.A', 'Banco Sol', 'Banco Caixa Geral Angola', 'Banco Millennium Atlantico', 'Banco VTB-Africa', 'Finibanco Angola S.A', 'Banco Kwanza Investe ', 'Banco Comercial  do Huambo ', 'Standard Bank Angola ', 'Banco Nacional de Angola ']

// Função geradora de números randômicos 

function gerador (limiteD, string){
   
   let num = Math.round(Math.random()*limiteD)
   
   let strinG = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'f','F']
   
   let numString = Math.round(Math.random()*2001);
   
   let menor = Math.round(Math.random()*limiteD) 
   
   if(isNaN(num)){
      
      for (let prop in strinG) {
         
         return numString = numString+strinG[prop]+strinG[prop]+numString+numString+strinG[prop];
      }
      
   }else{
      
   if (num < menor) {
      
   return  num = Math.round(Math.random()*limiteD);
      
   }else{
      
      
         return num = Math.round(Math.random()*limiteD);
   
   }
       }
}

const data = new Date()

const ano = data.getFullYear()

id.value = gerador('ok')

id.disabled = true;


function carregar(){
   
   return window.location.reload();
}


function continuar() {
   
   return window.location.href = "/layoutb.index.html "
}

if (indiceNome == 0 ) {
   
   imagem.src = "assets/img/bank/bai.png";
   
}else if(indiceNome == 1){
   imagem.src = "/assets/img/bank/banc.jpeg";
}else if(indiceNome == 2){
   imagem.src = "/assets/img/bank/bci.jpg";
}else if(indiceNome == 3){
   imagem.src = "/assets/img/bank/bca.jpg";
}else if(indiceNome == 4){
   imagem.src = "/assets/img/bank/bci.jpg"
}else if(indiceNome == 5){
   imagem.src = "/assets/img/bank/BDAA.jpg"
}else if(indiceNome == 6){
   imagem.src = "/assets/img/bank/economico.jpg"
}else if(indiceNome == 7){
   imagem.src = "/assets/img/bank/bfa.jpg"
}else if(indiceNome == 8){
   imagem.src = "/assets/img/bank/bir.jpg"
}else if(indiceNome == 9){
   imagem.src = "/assets/img/bank/bpc.jpg"
}else if(indiceNome == 10){
   imagem.src = "/assets/img/bank/internacional.jpg"
}else if(indiceNome == 11){
   imagem.src = "/assets/img/bank/keve.jpg"
}else if(indiceNome == 12){
   imagem.src = "/assets/img/bank/prestigio.jpg"
}else if(indiceNome == 13){
   imagem.src = "/assets/img/bank/sol.jpg"
}else if(indiceNome == 14){
   imagem.src = "/assets/img/bank/caixalogo.jpg"
}else if(indiceNome == 15){
   imagem.src = "/assets/img/bank/atlanticobank.jpg"
}else if(indiceNome == 16){
   imagem.src = "/assets/img/bank/vtp.jpg"
}else if(indiceNome == 17){
   imagem.src = "/assets/img/bank/finibanco.jpg"
}else if(indiceNome == 18){
   imagem.src = "/assets/img/bank/kwanza.jpg"
}else if(indiceNome == 19){
   imagem.src = "/assets/img/bank/bch.jpg"
}else if(indiceNome == 20){
   imagem.src = "/assets/img/bank/stand.jpg"
}else if(indiceNome == 21){
   imagem.src = "/assets/img/bank/bna.jpg"
}
 // Verificador do índice da lista dos bancos em Angoal

if (indiceNome == 0) {
     
      nomeBanco.value = nomes_contas[0]
      nomeBanco.disabled = true;
      numeroConta.value =gerador(999999)+'-'+gerador(999)+ '-'+10001
      numeroConta.disabled = true;
   
} else if (indiceNome == 1) {
     
       nomeBanco.value = nomes_contas[1]
       nomeBanco.disabled = true
       numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
       numeroConta.disabled = true;
       
  } else if (indiceNome == 2) {
     
      nomeBanco.value = nomes_contas[2]
      nomeBanco.disabled = true;
      numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
      numeroConta.disabled = true;
      
  } else if (indiceNome == 3) {
     
     nomeBanco.value = nomes_contas[3]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 4) {
     
     nomeBanco.value = nomes_contas[4]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 5) {
     
     nomeBanco.value = nomes_contas[5]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 6) {
     
     nomeBanco.value = nomes_contas[6]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 7) {
     
     nomeBanco.value = nomes_contas[7]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 8) {
     
     nomeBanco.value = nomes_contas[8]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 9) {
     
     nomeBanco.value = nomes_contas[9]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 10) {
     
     nomeBanco.value = nomes_contas[10]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 11) {
     
     nomeBanco.value = nomes_contas[11]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 12) {
     
     nomeBanco.value = nomes_contas[12]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 13) {
     
     nomeBanco.value = nomes_contas[13]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 14) {
     
     nomeBanco.value = nomes_contas[14]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 15) {
     
     nomeBanco.value = nomes_contas[15]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 16) {
     
     nomeBanco.value = nomes_contas[16]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 17) {
     
     nomeBanco.value = nomes_contas[17]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 18) {
     
     nomeBanco.value = nomes_contas[18]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 19) {
     
     nomeBanco.value = nomes_contas[19]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 20) {
     
     nomeBanco.value = nomes_contas[20]
     nomeBanco.disabled = true;
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
     
  }else if (indiceNome == 21) {
     
     nomeBanco.value = nomes_contas[21]
     nomeBanco.disabled = true
     numeroConta.value = gerador(999999)+'-'+gerador(999)+'-'+ 10001
     numeroConta.disabled = true;
  }
  