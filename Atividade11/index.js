function Retangulo(alt, larg) {
    var altura = alt
    var largura = larg

    this.getArea = function() {
        return altura * largura
    }
}

const altura = Number(prompt("Digite a altura do Retangulo"))

const largura = Number(prompt("Digite a largura do Retangulo"))

const ret = new Retangulo(altura, largura)

alert("A área do Retangulo é " + ret.getArea())

function Conta(nome, banco, numConta, saldo) {
    this.nome = nome
    this.banco = banco
    this.numConta = numConta
    this.saldo = saldo
}

function ContaCorrente(nome, banco, numConta, saldo) {
    Conta.call(this, nome, banco, numConta, saldo)

    this.saldoEspecial = 0


    this.setSaldoEspecial = function(saldoEspecial) {
        this.saldoEspecial = saldoEspecial
        return this
    }

    this.getInfo = function() {
        return this
    }
}


const contaCorrente = new ContaCorrente("Carlos", "Nubank", 1, 1000000).setSaldoEspecial(5000)

alert(JSON.stringify(contaCorrente.getInfo(), null, 2))


function ContaPoupanca(nome, banco, numConta, saldo) {
    Conta.call(this, nome, banco, numConta, saldo)

    this.juros = 0
    this.dataVencimento = 0


    this.setJuros = function(juros) {
        this.juros = juros
        return this
    }

    this.setDataVencimento = function(dataVencimento) {
        this.dataVencimento = dataVencimento
        return this
    }

    this.getInfo = function() {
        return this
    }
}

const contaPoupanca = new ContaPoupanca("Carlos", "Nubank", 1, 1000000).setDataVencimento("09/04/1994").setJuros(0.05)

alert(JSON.stringify(contaPoupanca.getInfo(), null, 2))