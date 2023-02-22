//Guardar array de Marcas no LocalStorage
var veiculosJSON = localStorage.getItem('FMT.VEICULOS')
//var marcas =  marcasJSON ? JSON.parse(marcasJSON) : [];
var veiculos;
if (veiculosJSON) {
   veiculos = JSON.parse(veiculosJSON)
    } else {
   veiculos = []
 }

 for (const nomeVeiculo of veiculos) {
   //criar a li * nPessoas
   adicionarModeloNoDOM(nomeVeiculo);
}  

// CRIAR A DIV
var divContainer = document.createElement('div');
divContainer.classList = 'container';

// CRIAR A UL
var ulVeiculo = document.createElement('ul');
ulVeiculo.classList = 'veiculos';

// Criar a estrutura de filho (nós filhos)
divContainer.appendChild(ulVeiculo);


console.log(divContainer);
var sectionListagem = document.getElementsByClassName('section-listagem')[0];
sectionListagem.appendChild(divContainer);

function adicionarVeiculo() {
   const valorMarca = document.getElementsByName('nomeMarca')[0];
   const valorModelo = document.getElementsByName('nomeModelo')[0];
   const valorCor = document.getElementsByName('nomeCor')[0];
   const valorKm = document.getElementsByName('nomeKm')[0];
   const valorPreco = document.getElementsByName('nomePreco')[0];
   console.log(`${valorMarca.value} ${valorModelo.value} ${valorCor.value} ${valorKm.value} ${valorPreco.value}`);

   if (valorMarca.value == '' && valorModelo.value == '' && valorCor.value == '' && valorKm.value == '' && valorPreco.value == '') {
       alert('Campo não pode estar vazio!')
   } else {
       adicionarVeiculoNoDOM(valorMarca.value, valorModelo.value, valorCor.value, valorKm.value, valorPreco.value);
       veiculos.push(valorMarca.value, valorModelo.value, valorCor.value, valorKm.value, valorPreco.value);
        localStorage.setItem('FMT.VEICULOS', JSON.stringify(veiculos));

       console.log(veiculos);
       alert(`Marca ${valorMarca.value}, Modelo ${valorModelo.value}, Cor ${valorCor.value}, Km ${valorKm.value} e Valor ${valorPreco.value} foram cadastrados com sucesso!`);
       valorMarca.value = '';
       valorModelo.value = '';
       valorCor.value = '';
       valorKm.value = '';
       valorPreco.value = '';
   }

}

function adicionarVeiculoNoDOM(valorMarca, valorModelo, valorCor, valorKm, valorPreco) {
 var liVeiculo = document.createElement('li');
 liVeiculo.classList = 'veiculo';
 liVeiculo.innerText = 'Marca: ' + valorMarca + ', Modelo: ' + valorModelo + ', Cor: ' + valorCor + ', Km: ' + valorKm + ', Valor: ' + valorPreco;
 ulVeiculo.appendChild(liVeiculo); 
}


//Limpar LocarStorage
function limparListagem() {
 localStorage.removeItem('FMT.VEICULOS');
 vehiculos = [];

} 