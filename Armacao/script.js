let conteudo = document.getElementById('conteudo');
let link = 'leonardo11.atwebpages.com/ListaArmacao.php'
fetch(link)
    .then(res => res.text())
    .then(texto => dados = texto);

function  criarTabela(){
    let tbl = '';
    for(let armacao in dados){
        tbl+= '<tr>';
        tbl+= `<td>${dados[armacao].nome }</td>`;
        tbl+= `<td>${dados[armacao].material }</td>`;
        tbl+= `<td>${dados[armacao].marcas }</td>`;
        tbl+= `<td>${dados[armacao].cores }</td>`;
        tbl+= '</tr>';
    }
}