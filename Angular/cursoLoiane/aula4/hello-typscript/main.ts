var minhaVar = 'minha variavel';

function minhaFunc(x,y){
    return x+y;
}

//ES6
let num = 2;
const PI = 3.14;

// exemplo StackOverflow
function exemplo1() {
    //x poderia ser acessado aqui
    for(var x = 0; x < 5; x++) {
        //x existe aqui
    };
    //x está visível aqui novamente
};
function exemplo2() {
    //x não existe aqui
    for(let x = 0; x < 5; x++ ) {
        //x existe aqui
    };
    //x não está visível aqui novamente
};
var x = 'foo1';
let y = 'bar1';
if (true == true) {
  var x = 'foo2';
  let y = 'bar2';
  console.log(x, y); // foo2 bar2
}
console.log(x, y); // foo2 bar1



var nuemros = [1, 2, 3];
nuemros.map(function(valor){
    return valor*2;
});
nuemros.map(valor =>{
    return valor*2;
})

class Matematica {
    soma(x, y){
        return x+y;
    }
}

var n1 : any = 'sddasd';
n1=4; 

