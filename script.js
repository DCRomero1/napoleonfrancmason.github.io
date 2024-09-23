// Cifrado
function encode() {
    const plaintext = document.getElementById("plaintext").value.toLowerCase();
    let ciphertext = "";
    const alphabetNoDot = "abcdefghistuv";
    const alphabetDot = "jklmnopqrwxyz";

    for (let i = 0; i < plaintext.length; i++) {
        const letter = plaintext.charAt(i);
        if (alphabetNoDot.includes(letter)) {
            ciphertext += `<div class='pigpen-wrapper'><div class='pigpen ${letter}'></div></div>`;
        } else if (alphabetDot.includes(letter)) {
            ciphertext += `<div class='pigpen-wrapper dotted'><div class='pigpen ${letter}'></div></div>`;
        }
    }
    document.getElementById("ciphertext").innerHTML = ciphertext;
}

// Teclado interactivo para crear texto cifrado
function addCipherLetter(letter) {
    const encodedText = document.getElementById("encoded-text");
    encodedText.innerHTML += `<div class='pigpen-wrapper'><div class='pigpen ${letter}'></div></div>`;
    document.getElementById("ciphertext").innerHTML = ciphertext;

}

// Descifrado
function decode() {
    const encodedText = document.getElementById("encoded-text").innerHTML;
    let decodedMessage = "";
    const symbolMap = {
        'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i',
        'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r',
        's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'
    };

    // Usamos el contenido cifrado para identificar cada símbolo y traducirlo a una letra
    const cipherElements = encodedText.match(/class='pigpen (\w)'/g);
    if (cipherElements) {
        cipherElements.forEach(element => {
            const letterClass = element.match(/class='pigpen (\w)'/)[1];
            decodedMessage += symbolMap[letterClass];
        });
    }

    document.getElementById("decoded-message").innerText = decodedMessage;
}

// Variable global para almacenar el texto cifrado ingresado
let currentCipherText = "";

// Teclado interactivo para agregar símbolos cifrados
function addCipherLetter(letter) {
    const encodedText = document.getElementById("encoded-text");
    currentCipherText += letter; // Añade la letra al texto cifrado

    // Representación visual de la letra cifrada en la interfaz
    encodedText.innerHTML += `<div class='pigpen-wrapper'><div class='pigpen ${letter}'></div></div>`;
}

// Mapa de símbolos cifrados a letras
const symbolMap = {
    'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i',
    'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r',
    's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'
};

// Función para descifrar el texto
function decode() {
    let decodedMessage = "";

    // Recorre el texto cifrado almacenado
    for (let i = 0; i < currentCipherText.length; i++) {
        const cipherLetter = currentCipherText.charAt(i);
        decodedMessage += symbolMap[cipherLetter]; // Convierte cada símbolo en la letra correspondiente
    }

    document.getElementById("decoded-message").innerText = decodedMessage; // Muestra el texto descifrado
}