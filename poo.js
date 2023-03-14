class Conta {
    constructor(titular, saldo) {
        this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this._saldo = saldo;
    }
    get numeroDaConta() {
        return this._numeroDaConta;
    }
    consultaSaldo() {
        return this._saldo;
    }
    adicionaSaldo(saldo) {
        this._saldo + saldo;
    }
    sacarDoSaldo(valor) {
        this._saldo -= valor;
    }
}
class ContaPF extends Conta {
    constructor(cpf, titular, saldo) {
        super(titular, saldo);
        this.cpf = cpf;
    }
    consultar() {
        return `Saldo atual: ${this.consultaSaldo()}`;
    }
    sacar(valor) {
        if (this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
            this.sacarDoSaldo(valor);
        }
    }
}
class ContaPJ extends Conta {
    constructor(cnpj, titular, saldo) {
        super(titular, saldo);
        this.cnpj = cnpj;
    }
    consultar() {
        return `Saldo atual: ${this.consultaSaldo()}`;
    }
    sacar(valor) {
        this.sacarDoSaldo(valor);
    }
}
const pessoaFisica = new ContaPF(64016334098, "Luís", 11000);
const pessoaJuridica = new ContaPJ(46780605000143, "Carlos", 7000);
console.log(pessoaFisica);
console.log(pessoaJuridica);
