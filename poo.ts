abstract class Conta {
    private readonly _numeroDaConta : number;
    titular : string;
    private _saldo: number;

    constructor(titular : string, saldo: number) {
        this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this._saldo = saldo;
    }

    get numeroDaConta(): number {
        return this._numeroDaConta;
    }

    protected consultaSaldo() : number {
        return this._saldo;
    }

    protected adicionaSaldo(saldo : number): void {
        this._saldo + saldo;
    }

    protected sacarDoSaldo(valor: number): void {
        this._saldo -= valor;
    }
}

class ContaPF extends Conta {
    cpf: number;

    constructor(cpf: number, titular : string, saldo: number) {
        super(titular, saldo);
        this.cpf = cpf;
    }

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`
    }

    sacar(valor: number) {
        if(this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
            this.sacarDoSaldo(valor);
        }
    }

}

class ContaPJ extends Conta {
    cnpj: number;

    constructor(cnpj: number, titular: string, saldo: number) {
        super(titular, saldo);

        this.cnpj = cnpj
    }

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`
    }

    sacar(valor: number) {
        this.sacarDoSaldo(valor)
    }

}

const pessoaFisica = new ContaPF(64016334098, "Luís", 11000)
const pessoaJuridica = new ContaPJ(46780605000143, "Carlos", 7000)

console.log(pessoaFisica)
console.log(pessoaJuridica)
