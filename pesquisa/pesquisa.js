let votes = [0, 0, 0, 0]; // array para armazenar os votos
function vote(candidate) {
    votes[candidate - 1]++; // incrementa o voto do candidato escolhido
    alert(`Você votou no candidato ${candidate}!`);
}