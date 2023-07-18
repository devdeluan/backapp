console.log ("")
console.log ("=================================")
console.log ("")
console.log (" Exercício Gasolina")
console.log ("")
console.log ("=================================")
console.log ("")

let prompt =require ('prompt-sync') ()

let alcool =  parseFloat(prompt('Digite o valor do Álcool: '))
let gasolina =  parseFloat(prompt('Digite o valor do Gásolina: '))
let resultado = alcool / gasolina




if (resultado <=0.7){
    console.log ("=================================")
    console.log("Use: Álcool" )  
    console.log ("=================================")
} else {
    console.log ("=================================")
    console.log("Use: Gasolina" )  
    console.log ("=================================")
}
