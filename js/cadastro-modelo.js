
//Guardar array de Marcas no LocalStorage
var modelosJSON = localStorage.getItem('FMT.MODELOS')
//var marcas =  marcasJSON ? JSON.parse(marcasJSON) : [];
var modelos;
if (modelosJSON) {
   modelos = JSON.parse(modelosJSON)
    } else {
   modelos = []
 }

 for (const nomeModelo of modelos) {
   //criar a li * nPessoas
   adicionarModeloNoDOM(nomeModelo);
}  

// CRIAR A DIV
var divContainer = document.createElement('div');
divContainer.classList = 'container';

// CRIAR A UL
var ulModelo = document.createElement('ul');
ulModelo.classList = 'modelos';

// Criar a estrutura de filho (nós filhos)
divContainer.appendChild(ulModelo);


console.log(divContainer);
var sectionListagem = document.getElementsByClassName('section-listagem')[0];
sectionListagem.appendChild(divContainer);

function adicionarModelo() {
   const inputNro1 = document.getElementsByName('nomeMarca')[0];
   const inputNro2 = document.getElementsByName('nomeModelo')[0];
   console.log(`${inputNro1.value} ${inputNro2.value}`);

   if (inputNro1.value == '' && inputNro2.value == '') {
       alert('Campo não pode estar vazio!')
   } else {
       adicionarModeloNoDOM(inputNro1.value, inputNro2.value);
       modelos.push(inputNro1.value, inputNro2.value);
        localStorage.setItem('FMT.MODELOS', JSON.stringify(modelos));

       console.log(modelos);
       alert(`Marca ${inputNro1.value} e Modelo ${inputNro2.value} foram cadastrados com sucesso!`);
       inputNro1.value = '';
       inputNro2.value = '';
   }

}

function adicionarModeloNoDOM(nomeMarca, nomeModelo) {
 var liModelo = document.createElement('li');
 liModelo.classList = 'modelo';
 liModelo.innerText = 'Marca: ' + nomeMarca + ', Modelo: ' + nomeModelo;
 ulModelo.appendChild(liModelo); 
}


//Limpar LocarStorage
function limparListagem() {
 localStorage.removeItem('FMT.MODELOS');
 modelos = [];

} 