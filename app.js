function verificar () {

    var nome = (document.getElementById('nome')).value;
    var sobrenome = (document.getElementById('sobrenome')).value;
    var email = (document.getElementById('email')).value;
    var senha = (document.getElementById('senha')).value;

    if (nome == '') {
        document.getElementById('naoPreenchimentoFirstName').style.display = 'inline';
        document.getElementById('nome').style.border = '2pt solid hsl(0, 100%, 74%)';
    }

    if (sobrenome == '') {
        document.getElementById('naoPreenchimentoLastName').style.display = 'inline';
        document.getElementById('sobrenome').style.border = '2pt solid hsl(0, 100%, 74%)';
    }

    if (email == '') {
        document.getElementById('naoPreenchimentoEmail').style.display = 'inline';
        document.getElementById('email').style.border = '2pt solid hsl(0, 100%, 74%)';
    }

    if (senha == '') {
        document.getElementById('naoPreenchimentoSenha').style.display = 'inline';
        document.getElementById('senha').style.border = '2pt solid hsl(0, 100%, 74%)';
    }
}