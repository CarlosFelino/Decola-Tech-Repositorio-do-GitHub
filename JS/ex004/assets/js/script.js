//boolean
var vouf = false;
console.log(typeof(vouf));

//number
var numberQualquer = 1;
console.log(typeof(numberQualquer));

//string
var nome = 'diana';
console.log(typeof(nome));

var variavel = 'ana';
variavel = 'julia';
console.log(typeof(variavel));

let variavel2 = 'gomes';
variavel2 = 'marta';
console.log(typeof(variavel2));

const constante = 'menina';
console.log(typeof(constante));

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();

