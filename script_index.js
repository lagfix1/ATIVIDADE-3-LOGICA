//Cria um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//Função para exibir as tentativas restantes
function tentativasRestantes() {
    for (let i = 10; i > 0; i--) {
        console.log(`Tentativas restantes: ${i}`);
    }
}
//Função para verificar o palpite do usuário
function verificarPalpite() {
    const palpite = parseInt(document.getElementById('palpite').value);
    if (palpite === numeroAleatorio) {
        alert('Parabéns! Você acertou o número!');
    } else if (palpite < numeroAleatorio) {
        alert('Tente um número maior!');
    } else {
        alert('Tente um número menor!');
    }
}

    function verificarPalpite() {
        if (tentativasRestantes <= 10) {
            verificarPalpite();
        } else {
            alert('Suas tentativas acabaram! O número era: ' + numeroAleatorio);
        }
    }
