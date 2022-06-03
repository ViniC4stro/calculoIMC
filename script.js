let calcular = document.getElementById('calcular')

function imc(){

    let nome = document.getElementById('nome').value
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){

        let valorIMC = (peso / (altura * altura))

        if (valorIMC < 18.6){
            tipoIMC = 'Abaixo do peso'

        }else if(valorIMC > 18.5 && valorIMC < 25.0){
            tipoIMC = 'Peso normal'

        }else if(valorIMC > 25.0 && valorIMC < 30.0){
            tipoIMC = 'Excesso de peso'

        }else if(valorIMC > 30.0 && valorIMC < 34.9){
            tipoIMC = 'Obesidade grau I'

        }else if(valorIMC > 34.9 && valorIMC < 39.9){
            tipoIMC = 'Obesidade grau II'

        }else{
            tipoIMC = 'Obesidade grau III'
        }

        resultado.textContent = `${nome} o seu IMC é ${valorIMC.toFixed(2)} e você está ${tipoIMC}`
    }
}

calcular.addEventListener('click',imc)