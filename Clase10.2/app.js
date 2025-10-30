let qrGenerado = false; // bandera para evitar múltiples QR

function generarQR() {
    if (qrGenerado) {
        alert("Ya se generó el QR. Si deseas crear otro, presiona 'Nuevo QR'.");
        return;
    }

    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();
    let input3 = document.getElementById('input3').value.trim();
    let input4 = document.getElementById('input4').value.trim();

    let textoCompleto = input1 + " " + input2 + " " + input3 + " " + input4;

    if (textoCompleto === "") {
        alert("Por favor, llena al menos un campo para generar el QR.");
        return;
    }

    
    let qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(textoCompleto);

    let qrImg = document.createElement('img');
    qrImg.src = qrCodeURL;
    qrImg.alt = 'Código QR';
    qrImg.classList.add('qr-code');

    // Insertar el QR en el contenedor
    let qrContainer = document.getElementById('qr-code');
    qrContainer.innerHTML = ""; // limpia el anterior
    qrContainer.appendChild(qrImg);

    // Cambiar el estado para evitar más generación
    qrGenerado = true;
    let btn = document.getElementById('btnGenerar');
    btn.disabled = true;
    btn.textContent = "QR generado ";
}
