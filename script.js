document.getElementById('convertBtn').addEventListener('click', convertToBinary);

function convertToBinary() {
    // Obtener el número del input
    const num = parseInt(document.getElementById('numberInput').value, 10);
    
    // Manejo de números negativos
    if (isNaN(num)) {
        document.getElementById('result').innerText = 'Ingrese un número válido.';
        return;
    }

    // Convertir a binario
    const binary = num.toString(2);

    // Mostrar el resultado
    document.getElementById('result').innerText = `Equivalente en binario: ${binary}`;
}
