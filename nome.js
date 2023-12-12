/*console.log(prompt("Qaul é o seu nome?"));

var variavel =  100;
const variavelConst = 200;

variavel = 400;
variavelConst = 600;

const corDeFundo = "#fefefe";

const nome = "gabriel";
const idade = 30;

console.log("Olá!", "meu nome é", nome, "e eu tenho", idade, "anos");

//Numbers: São os tipos que respresentam os numeros;

const altura = 1.79;
const temperatura = -20;

//String: São os tipos que respresentam conjuntos de  caracteres (textos);

const name = "Yuzo";
const idade = "23";

var souUmBoolean = true;
console.log(souUmBoolean);
souUmBoolean = false;
console.log(souUmBoolean);

//atividade:

var nome = "Sofia";
var sobrenome = "lemos";
var idade = 16;
var estudante =  true;

console.log("Nome:", nome, "Sobrenome:", sobrenome, "idade:", idade, "Estudante:", estudante);

console.log("Nome: " + nome + " Sobrenome: " + sobrenome + " Idade: " + idade + " Estudante? " + estudante);

var todoTexto = "Nome: " + nome + " Sobrenome: " + sobrenome + " Idade: " + idade + " Estudante? " + estudante;

console.log(todoTexto);

console.log(typeof(nome))
console.log(typeof(sobrenome))
console.log(typeof(idade))
console.log(typeof(estudante))



const idadeNumero = 23;
const idadeTexto = idadeNumero.toString();

console.log(typeof idadeNumero);
console.log(typeof idadeTexto);

const idadeTexto = "23";
const idadeNumero =  Number(idadeTexto);

console.log(typeof idadeTexto);
console.log(typeof idadeNumero); */



/* var n1 = 10;
var n2 = 5;
var n3 = 3;

var soma, subtracao, divisao, multiplicacao;

soma = n1 + n2; //15
subtracao = n1 - n2;
divisao = n1 / n2;
multiplicacao = n1 * n2;

console.log(soma);
console.log(subtracao);
console.log(divisao);

console.log(multiplicacao); */


/* var numero = 6;

console.log(numero % 2); */


/*  var n1 = 2;
var n2 = 44456;
var n3 = 2;
var n4 = 3; */

/*console.log(n1 === n2);
console.log(n1 === n3);

console.log(n1 !== n2);
console.log(n1 !== n3); */

/* console.log(n1 > n3);
console.log(n1 >= n3); */ 


/* console.log(n1 === n2 && n1 === n3);
console.log(n1 === n2 || n1 === n3);
console.log(n1 === n2 ! n1 === n3); */


//atividade

/* var a = true;
var b = false; 
var c = true;

console.log(a && b);
console.log(b && c);
console.log(a && c);
console.log(a && b && c); 


//atividade

console.log(a || b);
console.log(b || c);
console.log(a || c);
console.log(a || b || c);

console.log(!a) */


//atividade
 
/* var nome = "Sofia";
var idade = 16;
var maiorIdade = 18;
var Idade2050 = 43;

console.log("Nome: ", nome, " Idade: ", idade, " É maior de idade? ", maiorIdade, " Idade em 2050: ", Idade2050);
console.log( 16 >= 18); */

//correto
/* var nome = "SofiA";
var outroNome =  "     gsgsfsgsgs     "
var idade = 16;
var anoAtual = 2023; */

/* console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("É maior de idade? " + (idade >=18));
console.log("Idade em 2050: " + (idade + (2050 - anoAtual))); */
 

/* console.log(nome.length);
console.log(nome.toLocaleLowerCase());
console.log(outroNome.trim());
 */

/* const frase = "Hoje comi cenoura";
console.log(frase.includes("cenoura")); //true
console.log(frase.includes("batata")); //false */

/* const frase = "Hoje eu comi cenoura";
const novaFrase = frase.replaceAll("cenoura","batata");
console.log(novaFrase); */

const listaDeCompras = ["batata", "alface", "queijo"];
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]
listaDeCompras.push("cenoura");
listaDeCompras[4] = "papel";
listaDeCompras[listaDeCompras.length] = "cebola";
listaDeCompras[1] = "tomate";
console.log(listaDeCompras);
/* listaDeCompras.pop(); */


console.log(listaDeCompras);
console.log(listaDeCompras[0]);
console.log(listaDeCompras[1]);
console.log(listaDeCompras[2]);

console.log(listaDeCompras.length);

listaDeCompras.splice