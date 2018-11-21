var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES6
var num = 2;
var PI = 3.14;
// exemplo StackOverflow
function exemplo1() {
    //x poderia ser acessado aqui
    for (var x = 0; x < 5; x++) {
        //x existe aqui
    }
    ;
    //x está visível aqui novamente
}
;
function exemplo2() {
    //x não existe aqui
    for (var x_1 = 0; x_1 < 5; x_1++) {
        //x existe aqui
    }
    ;
    //x não está visível aqui novamente
}
;
var x = 'foo1';
var y = 'bar1';
if (true == true) {
    var x = 'foo2';
    var y_1 = 'bar2';
    console.log(x, y_1); // foo2 bar2
}
console.log(x, y); // foo2 bar1
var nuemros = [1, 2, 3];
nuemros.map(function (valor) {
    return valor * 2;
});
nuemros.map(function (valor) {
    return valor * 2;
});
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'sddasd';
n1 = 4;
