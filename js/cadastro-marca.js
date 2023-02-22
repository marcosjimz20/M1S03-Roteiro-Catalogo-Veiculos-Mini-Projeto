
//Guardar array de Marcas no LocalStorage
 var marcasJSON = localStorage.getItem('FMT.MARCAS')
 //var marcas =  marcasJSON ? JSON.parse(marcasJSON) : [];
 var marcas;
 if (marcasJSON) {
    marcas = JSON.parse(marcasJSON)
    } else {
   marcas = []
 }

 for (const nomeMarca of marcas) {
  //criar a li * nPessoas
  adicionarMarcaNoDOM(nomeMarca);
} 

// CRIAR A DIV
var divContainer = document.createElement('div');
divContainer.classList = 'container';

// CRIAR A UL
var ulMarcas = document.createElement('ul');
ulMarcas.classList = 'marcas';

// Criar a estrutura de filho (nós filhos)
divContainer.appendChild(ulMarcas);


console.log(divContainer);
var sectionListagem = document.getElementsByClassName('section-listagem')[0];
sectionListagem.appendChild(divContainer);

function adicionarMarca() {
    const inputNome = document.getElementsByName('nome')[0];
    console.log(inputNome.value);

    if (inputNome.value == '') {
        alert('Campo não pode estar vazio!')
    } else {
        adicionarMarcaNoDOM(inputNome.value);
        marcas.push(inputNome.value);
         localStorage.setItem('FMT.MARCAS', JSON.stringify(marcas));

        console.log(marcas);
        alert(`Marca ${inputNome.value} cadastrada com sucesso!`);
        inputNome.value = '';
    }

}

function adicionarMarcaNoDOM(nome) {
  var liMarca = document.createElement('li');
  liMarca.classList = 'marca';
  liMarca.innerText = nome;
  ulMarcas.appendChild(liMarca);
}


//Limpar LocarStorage
 function limparListagem() {
  localStorage.removeItem('FMT.MARCAS');
  marcas = [];
} 