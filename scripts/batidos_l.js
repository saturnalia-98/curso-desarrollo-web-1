/* 
    Semana6: JS Funciones
    Autor: Iran Rendon Montiel
    Fecha: 29/01/2023
*/

// Variables Number
let manzana = 4;
let leche = 6;
let nuez = 2;

// 
const licuadora = (ing1, ing2, ing3) => {
    return ing1+ing2+ing3;
}

const bascula = (l_dr, l_iz) =>  {
    if(l_dr>l_iz)
    {
        //console.log(`Oh, esta abajo el lado DERECHI, es mas pesado: ${l_dr}`)
        return l_dr;
    }
    else
    {
        //console.log(`Oh, esta abajo el IZQUIERDO, pesa mas:${l_iz}`);
        return l_iz;
    }
}

// Machacar la fruta con las manos
let machacado = manzana + leche + nuez;
console.log(`La suma con mis manos es: ${machacado}\n`);

//Pesar con las manos
if (manzana > nuez) {
  console.log(`Al tanteo, yo digo que pesa mas una manzana que pesa: ${manzana} `);
}


//Batido con licuadora
let batido = licuadora(manzana,nuez,leche);
console.log(`Usar una licuadora me da un batido de : ${batido}`);

let pera = 9;
let mas_grande = bascula(manzana,manzana);
console.log(`El objeto mas pesado es la pera que pesa: ${mas_grande}`)

