//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeParticipantes = [];

function adicionarNomes() {
    let nomeAmigo = document.getElementById("nomeAmigo").value;

    if (nomeAmigo && !listaDeParticipantes.includes(nomeAmigo)) {
        listaDeParticipantes.push(nomeAmigo);
        atualizarLista();
        document.getElementById("nomeAmigo").value = "";
    } else {
        alert("Nome inválido ou já inserido");
    }
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < listaDeParticipantes.length; i++) {
        lista.innerHTML += "<li>" + listaDeParticipantes[i] + "</li>";
    }
}
function sortearAmigo() {
    console.log("Participantes:", listaDeParticipantes);

    if (listaDeParticipantes.length < 2) {
        alert("Adicione ao menos 2 participantes!");
        return;
    }

    let sorteados = [];
    let resultado = [];

    for (let participante of listaDeParticipantes) {
        let amigoSecreto;
        
        do {
            let indiceAleatorio = Math.floor(Math.random() * listaDeParticipantes.length);
            amigoSecreto = listaDeParticipantes[indiceAleatorio];
        } while (amigoSecreto === participante || sorteados.includes(amigoSecreto));

        sorteados.push(amigoSecreto);
        resultado.push(`${participante} tirou ${amigoSecreto}`);
    }

    alert(resultado.join("\n"));
}