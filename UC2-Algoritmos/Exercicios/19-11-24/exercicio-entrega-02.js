const cachorro = {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// A)
// nome: "Juca"
// idade: 3 
// raca: "SRD"

// nome: "Juba"
// idade: 3 
// raca: "SRD"

// nome: "Jubo"
// idade: 3 
// raca: "SRD"

// B)
// Ele serve para fazer o "Espalhamento" do objeto, ou seja, copiar os dados de outro objeto em um novo, podendo ou não adicionar outros valores ou substituir os já registrados.
