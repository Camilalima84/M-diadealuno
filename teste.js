


let note1 = parseFloat(prompt("Digite a nota do primeiro semestre"))
let note2 = parseFloat(prompt("Digite a nota do Segundo  semestre"))

let result = (note1 + note2) / 2

if (result >= 7) {
   alert("Aluno Aprovado" + " " + "com a nota" + " " + result)
} else if (result >= 6) {
   alert("Aluno Em Recuperação" + " " + "com a nota" + " " + result)
} else {
   alert("Aluno Reprovado" + " " + "com a nota" + " " + result)
}



