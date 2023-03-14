"use strict";
exports.__esModule = true;
exports.Heterogeneous = exports.DiasDaSemana = exports.DiaDaSemana = void 0;
console.log("Types");
var languages = [];
languages.push("TypeScript");
//languages.push(3);  // provocar erro
var numeros = [1, 2, 3];
var textos = ["exemplo 1", "exemplo 2"];
//ou
var numerosNew = [1, 2, 3];
var textosNew = ["exemplo 1", "exemplo 2"];
numerosNew.push(4);
textosNew.push("exemplo 3");
// ReadonlyArray remove os push e pop
// Ele é somente leitura!
var numerosDaMega = [1];
//numerosDaMega[0] = 1;
//numerosDaMega.push(1);
//numerosDaMega.pop(1);
//numerosDaMega.length = 100;
var numeroDaLoto = [1, 2, 3]; // encurtamento
//Tuples / Tuplas
var list = ['string', 1, 'string 2'];
list.push('Cadu', 38, 'email');
// ou
var listNew = ["Bill Gates", 65, "bill@teste.com"];
listNew.push('Cadu', 38, 'email');
// array tupla readonly
var listLeitura = ["Carlos", 38];
// Enum
/* export enum DiaDaSemana {
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
    Domingo = 7
} */
/* export enum DiaDaSemana {
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
} */
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Segunda"] = 18] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 19] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 20] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 21] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 22] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 23] = "Sabado";
    DiaDaSemana[DiaDaSemana["Domingo"] = 24] = "Domingo";
})(DiaDaSemana = exports.DiaDaSemana || (exports.DiaDaSemana = {}));
var dia = DiaDaSemana[19];
//let diaNumero = DiaDaSemana[dia]; // livro com erro
//let diaString = DiaDaSemana["segunda"]; // livro com erro
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Segunda"] = "Segunda-feira";
    DiasDaSemana["Terca"] = "Terca-feira";
    DiasDaSemana["Quarta"] = "Quarta-feira";
    DiasDaSemana["Quinta"] = "Quinta-feira";
    DiasDaSemana["Sexta"] = "Sexta-feira";
    DiasDaSemana["Sabado"] = "S\u00E1bado";
    DiasDaSemana["Domingo"] = "Domingo";
})(DiasDaSemana = exports.DiasDaSemana || (exports.DiasDaSemana = {}));
var day1 = DiasDaSemana["Segunda"];
var day2 = DiasDaSemana.Domingo;
var Heterogeneous;
(function (Heterogeneous) {
    Heterogeneous["Segunda"] = "Segunda-feira";
    Heterogeneous[Heterogeneous["Terca"] = 1] = "Terca";
    Heterogeneous["Quarta"] = "Quarta-feira";
    Heterogeneous["Quinta"] = "Quinta-feira";
    Heterogeneous[Heterogeneous["Sexta"] = 6] = "Sexta";
    Heterogeneous[Heterogeneous["Sabado"] = 7] = "Sabado";
    Heterogeneous[Heterogeneous["Domingo"] = 8] = "Domingo";
})(Heterogeneous = exports.Heterogeneous || (exports.Heterogeneous = {}));
// Union vários tipos
var exemploVariavel;
exemploVariavel = "carlos";
exemploVariavel = 3;
var arr;
arr = [1, 2, 3];
arr = ["um", "dois", "tres"];
// tipos de parametros dinamicos
function deleteTeste(usuario) {
    if (typeof usuario == "string") {
        console.log(usuario, "deletado");
    }
    else {
        var i;
        for (i = 0; i < usuario.length; i++) {
            console.log(usuario[i], "deletado");
        }
    }
}
deleteTeste("Cadu");
deleteTeste(["Luis", "Jose"]);
// variveis com tipagens dinamicas
var x = 13;
console.log(typeof x); // => number
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.x = function () {
        throw new Error('method not implemented.');
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.x = function () {
        throw new Error('method not implemented.');
    };
    return B;
}());
function exemploComInstanceOf(parametro) {
    if (parametro instanceof A) {
        console.log("Sou a classe A");
    }
    else if (parametro instanceof B)
        console.log("Sou a classe B");
}
exemploComInstanceOf(new A());
exemploComInstanceOf(new B());
// Any é utilizado quando vc não tem certeza dos dados
var variavelAny = "Variável";
variavelAny = 13;
variavelAny = true;
console.log("// Tipando funções");
//Funções com tipagem no return
function calc(x, y) {
    return "resultado ".concat(x + y);
}
var resultadoCerto = calc(1, 1);
//let resultadoErrado: number = calc(1,1) // retorno da função é diferente da variavel
// Funções sem return
function logVoid() {
    console.log('Sem retorno');
}
function logAny() {
    console.log('Sem retorno');
}
//let receber : string = logVoid() // variavel esperado string, mas a função é sem retorno
var receberString = logAny();
// tipo "never"
function verificandoTipo(x) {
    if (typeof x === "string")
        return true;
    if (typeof x === "number")
        return false;
    return fail("Esse metódo não aceita esse tipo de Type!");
}
function fail(message) { throw new Error(message); }
verificandoTipo("um texto");
verificandoTipo(13);
var ativo = true;
//verificandoTipo(ativo);// acredito que o type never foi descontinuado
// Void vs Never
// "void" pode retornar null ou undefined
function teste() {
    return undefined;
}
// "never" não pode retornar nenhum valor
function Update() {
    while (true) {
        console.log("Carregando processos!");
    }
}
// Type Assertions
function typeAssertions(codigoAny) {
    var codigoNumber = codigoAny;
    //let codigoNumber : number = codigoAny;
    return codigoNumber * 10;
}
console.log(typeAssertions("a")); // => NaN 
console.log(typeAssertions(10)); // => 100
//CAPÍTULO 3: ESTRUTURAS DE CONTROLE E REPETIÇÃO
console.log("//if-else");
var condition = true;
if (condition) {
    console.log("variável com um valor true");
}
else {
    console.log("variável com um valor false");
}
console.log("//if-else-if");
var perfil = "admin";
if (perfil == "superuser") {
    console.log("Super usuário");
}
else if (perfil == "admin") {
    console.log("Administrador");
}
else {
    console.log("usuário comum");
}
console.log("//Operador ternário");
var profile = "admin";
console.log(perfil == "superusuario" ? "Super usuário" : "Administrador");
console.log(perfil == "superuser" ? "Super usuário" : perfil == "admin" ? "Administrador" : "usuário comum");
console.log("// Nullish Coalescing ??");
// verifica se é null ou undefined
// '' e "" passa batido na condicional
var perfis = ["admin", null, undefined, ' ', " "];
perfis.forEach(function (perfil) {
    console.log(perfil !== null && perfil !== void 0 ? perfil : "tipo do perfil: ".concat(typeof perfil));
});
console.log("// switch indicado para muitas condicionais");
switch (perfil) {
    case "superuser":
        console.log("");
        break;
    case "manager":
        console.log("gerente");
        break;
    case "admin":
        console.log("usuário administrador");
        break;
    case "user":
        console.log("usuário comum");
        break;
    default:
        console.log("sem perfil");
        break;
}
var linguagens = ["ruby", "java", "c#", "python"];
console.log('// for');
for (var i = 0; i < linguagens.length; i++) {
    console.log("Linguagem: ".concat(linguagens[i]));
}
console.log('// forEach');
linguagens.forEach(function (language) {
    console.log("language: ".concat(language));
});
