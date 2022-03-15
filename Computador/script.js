let conteudo = document.getElementById('conteudo');
let link = 'http://computador.sportsontheweb.net/ListarComputador.php/'
fetch(link)
    .then(res => res.text())
    .then(texto => dados = texto);

function  criarTabela(){
    let tbl = '';
    for(let computador in dados){
        tbl+= '<tr>';
        tbl+= `<td>${dados[computador].procesador}</td>`;
        tbl+= `<td>${dados[computador].usb}</td>`;
        tbl+= `<td>${dados[computador].atualizado ? "Sim" : "Não"}</td>`;
        tbl+= `<td>${dados[computador].dataAtualizacao }</td>`;
        tbl+= '</tr>';
    }
}