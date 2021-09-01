
function createList(quantidadeitens, mensagem){

let i = 0;
let ul = document.querySelector("ul");
console.log(ul); 
let n = 1;
while (i < quantidadeitens){
  
  var li = document.createElement('li');
  var texto = document.createTextNode(mensagem+" "+n);
  li.appendChild(texto);
   ul.appendChild(li);
  i++;
  n++;
}
  }
let qtditens = parseInt(prompt("quantidade de itens a ser exibido"));
let mensagem = prompt("digite a mensagem");
createList(qtditens, mensagem);
