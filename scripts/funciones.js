/* 
    Semana 6: Funciones
    Autor: Iran Rendon Montiel
    Fecha: 04/02/2023
*/

// Variables Number
//Precios en pesos por unidad de los insumos que corresponden a la cantidad exacta de insumo para hacer un licuado.

let manzana = 4
let leche = 6
let nuez = 2

//Suma
//Costo de un batido sumando el precio de una unidad de los tres ingredientes
const BatidoSaturnalia = function (num1, num2, num3){
    res = num1+num2+num3
    return("El precio del Batido es de: $" + res +".00");
}
console.log(BatidoSaturnalia(manzana, leche, nuez));

//Comparacion
//Ahora compararemos el precio de 1 unidad de 2 ingredientes, el de la leche: $6.00 y la manzana $4.00
function compararPrecio(num1, num2) {
    if (num1 == num2) {
        return("$" + num1 + " sea igual a $" + num2 + ".00");
    } else if (num1 > num2) {
        return("$" + num1 + " sea mayor que $" + num2 + ".00");
    } else if (num1 < num2) {
        return("$" + num1 + ".00 sea menor que $" + num2 + ".00");
    } else {
        return("$" + num1 + " sea diferente de $" + num2 + ".00");
    }
}

let comparacion = compararPrecio(manzana,leche)
console.log(`Es logico que el precio de la manzana: ${comparacion}, que es el precio de la leche`);

//Suma Funcion arrow
const licuadora = (ing1, ing2, ing3) => ing1+ing2+ing3;

let batido = licuadora(manzana,nuez,leche);
console.log(`El precio del Batido es de: $${batido}.00`);

//Comparacion Funcion arrow
const comparaPrecio = (a, b) => {
    if (a == b) {
        return("$" + a + " sea igual a $" + b + ".00");
    } else if (a < b) {
        return("$" + a + " sea mayor que $" + b + ".00");
    } else if (a > b) {
        return("$" + a + ".00 sea menor que $" + b + ".00");
    } else {
        return("$" + a + " sea diferente de $" + b + ".00 y no puede ser comparado.");
    }
};

let compara = comparaPrecio(manzana,leche)
console.log(`Es logico que el precio de la manzana: ${compara}, que es el precio de la leche`);

//Para el ejemplo de objeto voy a usar la descripcion y caracteristicas
//de un paquete de una cena de Saturnalia.

//OBJETO
const cenaEspacial = {
    Comensales:2,
    Experiencia:`Cannaclusive`,
    Precio: (a,b) => a+b,
    Ubicacion:`Oasis Sat`,
    Dia:`14 de febrero`,
    Hora:`6 pm`,
    El:`Fernando Mora`,
    Ella:`Mariana Torres`,
    DatosCliente: {
        ReservoCon: -500,
        NombreRva:`Fer Mora`,
        Telefono:2215232868,
        CobrarTarjetaNum:8574235648758953,
        AccessParking: true,
    },
}
//DESESTRUCTURACION DE 3 CLAVES
const {Comensales, Dia, Hora} = cenaEspacial;
console.log("Lista de comensales para el", Dia,"para la mesa 1, que tiene lugar para", Comensales, "personas y estara ocupada de", Hora,
"a 2 horas despues de las", Hora);

//ARRAY
const Almacen = ["Huevo", SalsaBechamel = {Harina: "25 g.", Huevos:2, Leche:"50 ml."}, 
Congelador1 = ["Carne", "Vegetales", Postres = {OliveLime:3, Cheescake:4, PeraVino:6}],261, 1456]

//Desestructuracion de 3 datos
const [IngSalsa, RecetaSalsa, InvCongelador] = Almacen;
console.log("Recuerda ponerle otro", IngSalsa, "a la salsa cuya receta es", RecetaSalsa, 
", pero antes busca la leche en el inventario del congelador: ",InvCongelador)


