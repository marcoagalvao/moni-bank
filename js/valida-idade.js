export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validaIdade(data) {
    const dataAtual = new Date(); //faz pegar a data do momento atual
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()); //pega as informacoes inseridas no campo e colocou 18 anos a mais

    return dataAtual >= dataMais18; // se eu estou em uma data maior do que o nascimento mais 18, quer dizer que o usuario ja fez 18 anos
}