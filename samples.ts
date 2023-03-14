
console.log("Types")

var languages : Array<string> =[];
languages.push("TypeScript");
 //languages.push(3);  // provocar erro

let numeros : number[] = [1,2,3];
let textos : string[] = ["exemplo 1", "exemplo 2"];

//ou

let numerosNew : Array<number> = [1,2,3]
let textosNew : Array<string> = ["exemplo 1", "exemplo 2"];

numerosNew.push(4)
textosNew.push("exemplo 3")

// ReadonlyArray remove os push e pop
// Ele é somente leitura!
let numerosDaMega : ReadonlyArray<number> = [1]

//numerosDaMega[0] = 1;
//numerosDaMega.push(1);
//numerosDaMega.pop(1);
//numerosDaMega.length = 100;

let numeroDaLoto : Readonly<number[]> = [1,2,3] // encurtamento

//Tuples / Tuplas

let list : [string, number, string] = ['string', 1, 'string 2']
list.push('Cadu', 38, 'email')

// ou
let listNew : [nome : string, idade : number, email : string] = ["Bill Gates", 65, "bill@teste.com"]
listNew.push('Cadu', 38, 'email')

// array tupla readonly
let listLeitura: readonly [nome : string, idade : number] = ["Carlos", 38]

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

export enum DiaDaSemana {
    Segunda = 18,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}

let dia = DiaDaSemana[19];
//let diaNumero = DiaDaSemana[dia]; // livro com erro
//let diaString = DiaDaSemana["segunda"]; // livro com erro


export enum DiasDaSemana {
    Segunda = "Segunda-feira",
    Terca = "Terca-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo"
}

let day1 = DiasDaSemana["Segunda"]
let day2 = DiasDaSemana.Domingo

export enum Heterogeneous {
    Segunda = "Segunda-feira",
    Terca = 1,
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = 6,
    Sabado,
    Domingo
}

// Union vários tipos

let exemploVariavel : ( string | number)
exemploVariavel = "carlos"
exemploVariavel = 3


var arr: (number[] | string[])
arr = [1,2,3]
arr = ["um", "dois", "tres"]

// tipos de parametros dinamicos
function deleteTeste(usuario :string | string[]) {
    if (typeof usuario == "string") {
        console.log(usuario, "deletado")
    }else {
        var i;
        for (i = 0; i < usuario.length; i++) {
            console.log(usuario[i], "deletado")
        }

    }
}

deleteTeste("Cadu")
deleteTeste(["Luis", "Jose"])


// variveis com tipagens dinamicas

let x :string | number | boolean = 13
console.log(typeof x) // => number


// interfaces verificando qual instancia está sendo passada na função

interface Z { x(): string } 

class A implements Z {
    x(): string {
        throw new Error('method not implemented.');
    }
}
class B implements Z {
    x(): string {
        throw new Error('method not implemented.');
    }
}

function exemploComInstanceOf(parametro: Z) {
    if (parametro instanceof A) {
        console.log("Sou a classe A")
    }
    else if (parametro instanceof B)
        console.log("Sou a classe B")
}

exemploComInstanceOf(new A())
exemploComInstanceOf(new B())

// Any é utilizado quando vc não tem certeza dos dados
let variavelAny : any = "Variável";
variavelAny = 13;
variavelAny = true;


console.log("// Tipando funções")

//Funções com tipagem no return
function calc(x: number, y: number) : string {
    return `resultado ${x + y}`;
}

let resultadoCerto: string = calc(1,1)
//let resultadoErrado: number = calc(1,1) // retorno da função é diferente da variavel


// Funções sem return
function logVoid(): void {
    console.log('Sem retorno')
}

function logAny(): any {
    console.log('Sem retorno')
}

//let receber : string = logVoid() // variavel esperado string, mas a função é sem retorno
let receberString : (string | number | [] | boolean) = logAny()


// tipo "never"
function verificandoTipo(x: string | number): boolean {
    if (typeof x === "string") return true;
    if (typeof x === "number") return false;

    return fail("Esse metódo não aceita esse tipo de Type!");
    
}
function fail(message: string) : never { throw new Error(message)}

verificandoTipo("um texto");
verificandoTipo(13);
let ativo = true;
//verificandoTipo(ativo);// acredito que o type never foi descontinuado

// Void vs Never

// "void" pode retornar null ou undefined
function teste() :void {
    return undefined;
}
// "never" não pode retornar nenhum valor
function Update(): never {
    while(true) {
        console.log("Carregando processos!")
    }
}


// Type Assertions
function typeAssertions( codigoAny: any) {
    let codigoNumber : number = <number>codigoAny;
    //let codigoNumber : number = codigoAny;
    return codigoNumber * 10;
}

console.log(typeAssertions("a")) // => NaN 
console.log(typeAssertions(10)) // => 100


//CAPÍTULO 3: ESTRUTURAS DE CONTROLE E REPETIÇÃO

console.log("//if-else")
let condition = true;

if (condition) {
    console.log("variável com um valor true")
}else{
    console.log("variável com um valor false")
}

console.log("//if-else-if")

let perfil = "admin"

if (perfil == "superuser"){
    console.log("Super usuário")
}
else if (perfil == "admin") {
    console.log("Administrador")
} else {
    console.log("usuário comum")
}

console.log("//Operador ternário")
let profile = "admin";

console.log(
    perfil == "superusuario" ? "Super usuário" : "Administrador"
)

console.log(
    perfil == "superuser" ? "Super usuário" : perfil == "admin" ? "Administrador" : "usuário comum"
)


console.log("// Nullish Coalescing ??")
// verifica se é null ou undefined
// '' e "" passa batido na condicional

let perfis : any[] = ["admin", null, undefined, ' ', " "]

perfis.forEach((perfil) => {
    console.log(
        perfil ?? `tipo do perfil: ${typeof perfil}`
    )
})


console.log("// switch indicado para muitas condicionais")
switch(perfil) {
    case "superuser":
        console.log("")
    break;
    case "manager":
        console.log("gerente")
    break;
    case "admin":
        console.log("usuário administrador")
    break;
    case "user":
        console.log("usuário comum")
    break;
    default:
        console.log("sem perfil")
    break;
}


let linguagens : string[]= ["ruby", "java", "c#", "python"]

console.log('// for')
for  (var i =0; i < linguagens.length; i++) {
        console.log(
            `Linguagem: ${linguagens[i]}`
        )
}


console.log('// forEach')
linguagens.forEach(language => {
    console.log(
        `language: ${language}`
    )
});

















