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


