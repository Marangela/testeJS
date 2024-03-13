const primeiraVariavel = "Hello World"
console.log(primeiraVariavel)
// 1 declaracao 2- identificação da variavel 3 tipo da variavel
// padaro de escrita = camelCase
const corDoCarro = "Preto"
const modeloDoCarro = "Sandero" 
const chassiDoCarro = 7590867432
const anoDoCarro = 2012
const marcaDoCarro = "Renault"

console.log("Cor predominante: "+corDoCarro+" modeloDoCarro: "+modeloDoCarro+" Chassi "+chassiDoCarro+ " Ano: " + anoDoCarro)
// segunda forma inetrpolação
console.log(`Cor predominante:${corDoCarro},Modelo;${modeloDoCarro},marca: ${marcaDoCarro},Chassi): ${chassiDoCarro},Ano: ${anoDoCarro}`)
// sem kiteral templates
console.log("Bem vindo ao bar do Guilherme:",
"1-litrao,",
"2-pitao,",
"3-refri,",
"4-agua,"
)
// terceira forma liyeral templates
console.log (`Bem vindo ao bar do Guilherme. Escolha uam opçao:
1-Agua
2-Coca
3-Pepsi
4-litrao
`);