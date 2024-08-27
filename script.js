document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = shuffleText(inputText);

    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = unshuffleText(inputText);

    document.getElementById('outputText').value = decryptedText;
});

function shuffleText(text) {
    // Embaralha o texto
    const array = text.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function unshuffleText(text) {
    // Desembaralha o texto (neste caso, estamos apenas revertendo o embaralhamento como exemplo)
    // A função real de desembaralhamento dependeria do algoritmo de embaralhamento usado
    // Aqui, simplesmente usamos a reversão como exemplo básico
    return text.split('').reverse().join('');
}
