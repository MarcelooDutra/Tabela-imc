/* Para criarmos as funcionalidades de calculo do imc fazemos o seguinte:

-Criamos variaveis para cada input criado no html para linkarmos com o js.

-Criamos uma funcao para qual queremos que é imc pode-se aplicar este valor a funcao.

-Dentro desta funcao colocamos apenas os inputs em escopo exclusivo da funcao e global so o do resultado(button).

- Criamos um condicional onde os testes tem que ser peso e altura !==(diferente de cx de text vazia) ex:
if(peso.value !== '' && altura !== '' ).OBS: o value pode ser aplicado direto na variavel no final dela não precisando colocar ali dentro da condicional.

-Criamos uma variavel para valorImc onde este valor e calculado da seguinte forma:
const valorImc = (peso / altura * altura). Onde altura ao quadrado e multiplicado por ela mesma.

-Depois desta variavel criaremos um let para pode ser sobrescrito onde vamos condicionar as classificações ex:
let classificação = '' string vazia porque vai ser sobrescrita nas condicionais com outras frases.

- Criamos entao as condicionais com if e else onde vamos chamar o valor da variavel valorImc e colocar os testes ex:
if(valorImc > 18.5){
    classificação = 'abaixo do peso'... e assim vamos realizando. 
}

- Ao final desta condicional vamos colocar o seguinde imprimir o resultado do valor do imc ex:
resultado.innerTexContent = valorImc.

- depois um else para imprimir o resultado caso nao seja preenchido nada nas caixas e mostrar pro usuario que deve preencher ex:
resultado.innerTextContent = 'preencha os campos'

- Ao final a ação do button para que este calculo aconteça utilizando a seguinte sintaxe ex:
fora do escopo da funcao calculo.addVentListene('click', imc). Onde ele vai dar acao ao clicar e dizer o que vai calcular que e o imc(funcao criada la no topo com as variaveis.)

-UMA OBS IMPORTANTE. NÃO PRECISAMOS CRIAR FUNCAO PARA O BOTAO, POIS BASTA A FUNCAO TER O MESMO NOME DE ACAO DO BOTAO;
*/