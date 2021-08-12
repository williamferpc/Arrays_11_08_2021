let datos = [1,2,3,4,[1,2,3,4,5],6,7,8,["miguel",2],10];

let almacenar = [];
const respuesta = datos.some((value,indice,array)=>{
    if(value[1] == 2){
        almacenar.push(array[indice]);
    }
});

console.log(datos);
console.log(almacenar);











// const informacio = ["Miguel", "Angel", "Escamilla", 23];

// let data = informacio.map(valor => (valor=="Escamilla") ? "Castro Escamilla" : valor);
// console.log(informacio);
// console.log(data);









// const lista = [
//         "Miguel",
//         "Castro",
//         23,
//         ({...arg})=>{
//             return `Hola ${arg.nom} como estas`;
//         }
//     ];
// const f = (valor,indice,array)=>{
//     if(typeof valor == "function"){
//         console.log(valor({nom: lista[0]}));
//     }
// }
// let valor = lista.forEach();

// console.log(valor);










// let array = [];

// array["Nombre"] = "Miguel";
// array["Apellido"] = "Castro";
// array["Edad"] = 23;

// for(let [indice, valor] of Object.entries(array)){
//     console.log(valor);
// }



// console.log(array);
// console.log(Object.values(array));
// Object.values(array).forEach(element => {
//     console.log(element);
// });