//const calcular = document.getElementById('calcular')//Fica de forma global.

//Cria-se uma funcao imc.
function imc(){
    const peso = document.getElementById('num01')
    const altura = document.getElementById('num02')
    const res = document.getElementById('res')

    //condicional de teste.
    if(peso.value !== '' && altura.value !== ''){
        
        //cria-se uma variavel para o valor do imc
        const valorImc = (peso / (altura * altura)).toFixed(1)

        //cria-se uma variavel para cada classificção onde será sobrescrita de acordo com cada condicao.
        let classPeso = ''

        //cria-se as condicções 
        if(valorImc < 18.5){
            classPeso = 'Esta abaixo do peso'
        }else if(valorImc >= 18.5 && valorImc <= 24.9){
            classPeso = 'Peso normal'
        }else if(valorImc >= 25 && valorImc <= 29.9){
            classPeso = 'Sobre peso'
        }else if(valorImc >= 30 && valorImc <= 34.0){
            classPeso = 'Obesidade grau 1'
        }else if(valorImc >= 35 && valorImc <= 39.0){
            classPeso = 'Obesidade grau 2'
        }else{
            classPeso = "Obesidade grau 3"

            //cria-se um resultado para imprimir na cx de texto o valor do imc.
            res.innerTextContent = valorImc
        }
    }else{
        res.innerTextContent = 'Invalido. Preencha os campos!'
    }
}
//cria-se uma ação para o botão de calculo.
//calcular.addEventListener('click', imc)