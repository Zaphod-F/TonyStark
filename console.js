console.groupCollapsed("Nossas mensagens");
console.log("estou escrevendo no console");
console.error("eu sou um error");
console.warn("eu sou um aviso");
var num=12;
if(num>10){
    
    console.error("numero nao pode ser maior q dez");
}
console.assert(num<=10,"numero nao pode ser maior q 10");
console.groupEnd();

console.table([
    [1,2,3],
    [2,4,6]
])


console.table([
  {nome:"Alura",num:35},
    {nome:"heitor",num:42}
    
])