//Nesse caso aqui também podemos utilizar o 'const btnDownload = document.getElementById('#download'); nos três casos, mas usando o querySelector também funciona, desde de que para utilizar o id tem que colocar o '*'
const input = document.querySelector('#arquivo');
const preview = document.querySelector('#preview');
const btnDownload = document.querySelector('#download');

//Usando o change irá detectar alguma alteração e e ira acionar o a function
input.addEventListener('change', function(){
    console.log(this.file);

    //Aqui é importante colocar o [0], pois toda vez que pegar um arquivo ira substituir o arquivo anterior pelo novo
    const arquivo = this.files[0];

    //Essa variavel vai ler o arquivo escolhido anteriormente
    const leitor = new FileReader();

    //Aqui a variavel, após ler o arquivo vai criar um evento que vai carregar o arquivo e acionar uma função
    leitor.addEventListener('load', function(){
        console.log(leitor.result);
        //Entregando resultado do leitor.result para a variavel preview
        preview.value = leitor.result
    })

    if(arquivo){
        //Aqui o leitor vai ler como texto
        leitor.readAsText(arquivo); //(readAsText = Ler como texto)
    }
});



const download = function(){

    //Criando um documento link
    const a = document.createElement('a')

    //Não vai exibir a tag HTML, assim ficando oculta
    a.style = 'display: none'

    //Anexando o 'a' no document.body
    document.body.appendChild(a) //(appendChild = anexar filho)
    return function(conteudo, nomeArquivo){

    //Vamos transformar o conteudo em um arquivo bruto (pode ser lido como texto, binario etc) para fazer a manipulação do mesmo
    const blob = new Blob ([conteudo], {type: 'octet/stream'}); //Blob = é um ariquivo bruto no java script

    //Aqui estamos craindo um URL
    const url = window.URL.createObjectURL(blob);
    
    //Passando o URL para o 'a'
    a.href = url

    //Transformando o link em downlaod
    a.download = nomeArquivo;

    //Acioando o download ao clicar
    a.click();

    //Revogando o 'url', dizer que vamos reconsiderar (destrui-la)
    window.URL.revokeObjectURL(url)
    }
}

btnDownload.addEventListener('click', function(){
    download()(preview.value, 'ArquivoCSV-Mudado.jason')
})