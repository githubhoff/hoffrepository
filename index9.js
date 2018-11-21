/*
* @author Cássio Trindade
* Exemplo de comentario de várias linhas
*
*/

function CriarParagrafo() {
    var objNovoParagrafo = document.createElement('p');
    var strTexto = document.createTextNode('Informação do parágrafo.');
    objNovoParagrafo.appendChild(strTexto);
    document.getElementById('pindice').appendChild(objNovoParagrafo);
}

function RemoverParagrafo(p) {
    var objParagrafo = document.getElementsByName(p);
    objParagrafo.removeChild(strTexto);

}

function carregaImagens() {
    var imagens = new Array("img1","img2","img3","img4","img5","img6");

    for (key in imagens) {
        var numero = parseInt(key) + parseInt(1);
        var ele = "img" + numero;
        document.getElementById(ele).src = imagens[key]+".jpg";
        document.getElementById(ele).style.width = "100px";
        document.getElementById(ele).style.height = "100px";
    }
}

function trocaImagens() {
    var imagenst = new Array("img1","img2","img3","img4","img5","img6");

    for (key in imagenst) {
        var numero = parseInt(key) + parseInt(1);
        var ele = "paola" + numero;
        document.getElementById(ele).src = imagenst[key]+".jpg";
        document.getElementById(ele).style.width = "100px";
        document.getElementById(ele).style.height = "100px";
    }
}

function ExibirForm() {

    var objDiv = document.getElementById('formlogin').style.visibility;

    if (objDiv == 'visible')
        document.getElementById('formlogin').style.visibility = 'hidden';
    else
        document.getElementById('formlogin').style.visibility = 'visible';


}

function Destacar(campo) {
    campo.style.backgroundColor = 'rgb(255,255,0)';
}
function Restaurar(campo) {
    campo.style.backgroundColor = 'rgb(255,255,255)';
}


function quebra() {

    var _NumInt = "Tecnologia Software Livre";
    var _VetOUT = _NumInt.split(" ");
    document.getElementById("exemplo").innerHTML = "O TERCEIRO  elemento presente no _VetOUT: " + _VetOUT[2];

}
function exemploDatas() {
    var data = new Date();
    var dataCompleta = data.toLocaleString();

    document.getElementById("footer").innerHTML = dataCompleta;

    document.getElementById("footer").style.backgroundColor = "#000000"
    document.getElementById("footer").style.color = "#fafafa"

}

function foo() {
    var _sexo = "M";
    if (_sexo == "M") {
        alert("Masculino")
    } else {
        alert("Feminino")
    }
};

function media() {
    var notas = new Array(1, 9, 9, 9, 9, 9, 9, 9, 9, 10)
    var media = 0;
    for (var key in notas) {
        var numeroAluno = parseInt(key) + 1;
        document.write("<h3> a nota do aluno " + numeroAluno + " é " + notas[key] + "</h3>")
        media += notas[key];
    }
    document.write("<h2> A média dos alunos é " + media / notas.length + "</h2>")
};


function mediaSimples() {
    var valor1 = document.getElementById("valor-um").value;
    var valor2 = document.getElementById("valor-dois").value;

    var media = (parseInt(valor1) + parseInt(valor2)) / 2;
    document.getElementById("resultado").innerText = "O resultado da média é:  " + media;

    document.getElementById("boxResultado").style.backgroundColor = '#0f7a80'
    document.getElementById("boxResultado").style.color = '#faedf1'
    document.getElementById("boxReultado").style.padding = "5px";

}


function exemplo() {
    var data = new Date().toLocaleString();

    document.getElementById("titulo").innerHTML = data;

    var now = moment();

    document.getElementById("dataMoment").innerHTML = now;


}

function exemplo1() {
    var DiaSemana = new Date();
    DiaSemana = 6;

    switch (DiaSemana) {
        case 0:
            alert(" Segunda-feira ");
            break;
        case 2:
            alert(" Terça-feira ");
            break;
        case 3:
            alert(" Quarta-feira ");
            break;
        case 4:
            alert(" Quinta-feira ");
            break;
        case 5:
            alert(" Sexta-feira ");
            break;
        case 6:
        case 7:
            alert(" Fim de semana ");
            break;
        default:
            alert(" Dia inexistente ");
    }


}

var exibeMensagem = function () {
    mensagem = "MANTRA";
    console.log(mensagem);
    var mensagem;
}


var exibeMensagem1 = function () {
    var mensagemForaDoIf = "MANTRA";
    if (mensagemForaDoIf == "MANTRA") {
        var mensagemDentroDoIf = "JavaScript";
    }
    console.log(mensagemForaDoIf); // MATERA
    console.log(mensagemDentroDoIf); // JavaScript
}

var exibeMensagem2 = function () {
    var mensagemForaDoIf = "MANTRA";
    if (mensagemForaDoIf == "MANTRA") {
        let mensagemDentroDoIf = "JavaScript";
        console.log(mensagemDentroDoIf); // imprime JS
    }
    // mensagemDentroDoIf não é mais acessível a partir deste ponto
    console.log(mensagemForaDoIf); // imprime MATERA

    // apenas mensagemForaDoIf existe nesse ponto
}

function salva() {
    alert("Animal Salvo")
}


// Comentário de uma linha em cima de uma function
function soma() {
    var numeroUm = document.getElementById("valor-um").value;
    var numeroDois = document.getElementById("valor-dois").value;
    alert(parseInt(numeroUm) + parseInt(numeroDois));
}

