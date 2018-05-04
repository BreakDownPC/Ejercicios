function comparar() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    var resultado =0;
    if (numero1 > numero2)
        {
            resultado = numero1;
            resultado = document.getElementById('numero1').value = resultado;
            alert("El numero mayor es "+numero1)
        }
    else
        {
            resultado = numero2;
            resultado = document.getElementById('numero2').value = resultado;
            alert("El numero mayor es "+numero2)
        }
    return false;
}
