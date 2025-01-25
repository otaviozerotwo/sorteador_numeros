document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formSorteador').addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroMaximo = parseInt(document.getElementById('numeroMaximo').value);

    let numeroAleatorio = Math.random() * numeroMaximo;
    numeroAleatorio = Math.floor(numeroAleatorio + 1);
    
    document.getElementById('spanResultado').innerText = numeroAleatorio;

    document.querySelector('.resultado').style.display = 'block';
  })
})