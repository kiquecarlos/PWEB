function lerNumeros(qtd) {
    const result = []
    for (let index = 0; index < qtd; index++) {
        result.push(Number(prompt(`${index+1} - Digite um Numero`)))
    }

    return result
}

function showMaior(a, b, c) {

    alert(Math.max(a, b, c))
}

function calcMaior() {
    const numeros = lerNumeros(3)

    showMaior(...numeros)

}

function showOrder(a, b, c) {

    const numeros = [a, b, c]

    let result = ''

    numeros.sort((a, b) => a - b)
    for (const numero of numeros) {
        result += (numero + '\n')
    }

    alert(result)
}

function orderBy() {
    const numeros = lerNumeros(3)

    showOrder(...numeros)

}

calcMaior()
orderBy()