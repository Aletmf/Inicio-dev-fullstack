function exibeNomeEstudante(){
    console.log("Caroline");
}

// Expressão de função
const estudanteReprovou = function (notaFinal, faltas){
    if (notaFinal < 7 && faltas > 4){
        return true;
    }
    else return false;
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

// Hosting permite o console.log antes de uma função normal, já antes de uma expressão de função não

