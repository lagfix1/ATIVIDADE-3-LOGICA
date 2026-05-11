//Cria um número aleatório entre 1 e 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

//Função para exibir atulizar o número de tentativas restantes
function atualizarTentativas() {
    document.getElementById('tentativas').textContent = 'Tentativas restantes: {tentativas}';
}
//Função para verificar o palpite do usuário
function verificarPalpite() {
    const palpite = parseInt(document.getElementById('palpite').value);
    const mesnagem = document.getElementById('mensagem');
    if(tentativas <= 0) {
        mesnagem.textContent = 'Suas tentativas acabaram! O número era: ${numeroAleatorio}';
        return
    }
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mesnagem.textContent = 'Por favor, insira um número válido entre 1 e 100.';
        return;
    }
    tentativas--;
    atualizarTentativas();

    if (palpite === numeroAleatorio) {
        mensagem.textContent = 'Parabéns! Você acertou o número!';
    } else if (tentativas === 0) {
        mensagem.textContent = `Suas tentativas acabaram! O número era ${numeroAleatorio}`;
    } else if (palpite < numeroAleatorio) {
        mensagem.textContent = 'Tente um número maior!';
    } else {
        mensagem.textContent = 'Tente um número menor!';
    }
}


    