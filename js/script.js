function gerar(){
    const min = parseInt(document.getElementById('min').value)
    const max = parseInt(document.getElementById('max').value)
    const resultado = document.getElementById('resultado')
   const result = Math.floor(Math.random() * (max - min + 1)) + min

    if(isNaN(result)){
        alert('[ERROR] Valor Inválido! Confira os números.')
    }

   resultado.textContent = result
}