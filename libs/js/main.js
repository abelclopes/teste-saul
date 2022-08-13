class Pessoa{
    id;
    Nome;
    filhos;
    
}
class Filho{
    Nome;
    IdPai;    
}


const datalist = {
    'pessoas':[]
};
function IncluirPessoa() {
    let pessoa = new Pessoa(); 
    newPessoa = document.getElementById('nome');
    let contador = datalist.pessoas.length;
    pessoa.id = contador++
    pessoa.Nome = newPessoa.value;
    console.log('newPessoa', pessoa );
    datalist.pessoas.push(pessoa);
    GravarStorage(datalist.pessoas);
    loadPessoas(datalist.pessoas);
}   

const incluirFilhoPessoa = () => {

}

const RemoverPessoa = (value) => {

}

const GerarListaPessoa = (value) => {

}

const loadPessoas = (pessoaslist) => {
    const textarePessoas = document.getElementById('pessoasJson');

    let pessoaStorage = LoadStorage();
    pessoaStorage =  JSON.parse(pessoaStorage)
    console.log('pessoaStorage', JSON.stringify(pessoaStorage));
    console.log('pessoas', JSON.stringify(pessoaslist));
  
    if(pessoaslist.length > 0){
        textarePessoas.value =  JSON.stringify({pessoaslist}) 
    }else if(pessoaStorage.length > 0){
        const test =  JSON.stringify(pessoaStorage)
        textarePessoas.value = test;
    } else{
        textarePessoas.value = '';
    }
}

const GravarNoBanco = (value) => {
    console.log('teste');
}



const LerBanco = (pessoas) => {
    loadPessoas()
    
}

const GravarStorage = (listToStorage) => {
    let meuStorage = localStorage;
    meuStorage.setItem('PESSOAS', JSON.stringify(listToStorage));
}

const LoadStorage = () => {
    let meuStorage = localStorage;
    const pessoaStorage = meuStorage.getItem('PESSOAS');
    console.log('PESSOA STORAGE', pessoaStorage);
    return pessoaStorage;
}



this.loadPessoas(datalist.pessoas );