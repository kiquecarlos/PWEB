const aluno1 = {
    nome: "Carlos",
    sobrenome: "Oliveira"
}

const aluno2 = {}

aluno2.nome = "Carlos"
aluno2.sobrenome = "Oliveira"

const aluno3 = new Object()
aluno3["nome"] = "Carlos"
aluno3["sobrenome"] = "Oliveira"


alert(JSON.stringify(aluno1))
alert(JSON.stringify(aluno2))
alert(JSON.stringify(aluno3))