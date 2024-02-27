let contador = 0;

document.getElementById("Cuenta").textContent = contador;
document.getElementById("Aumentar").onclick = function(AumentarNumero){
    contador++;
    document.getElementById("Cuenta").textContent = contador;
};
document.getElementById("Resetear").onclick = function(ResetearNumero){
    contador = 0;
    document.getElementById("Cuenta").textContent = contador;
};
document.getElementById("Diminuir").onclick = function(DiminuirNumero){
    contador--;
    document.getElementById("Cuenta").textContent = contador;
};