document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('consulta-form').reset();
    document.getElementById('mensagem-erro').textContent = '';
    limparDados();
});

document.getElementById('pesquisar').addEventListener('click', function() {
    realizarPesquisa();
});

document.getElementById('consulta-form').addEventListener('submit', function(event) {
    event.preventDefault();
    realizarPesquisa();
});

function realizarPesquisa() {
    const pesquisaPor = document.querySelector('input[name="pesquisaPor"]:checked').value;
    const inputPesquisa = document.getElementById('inputPesquisa').value.trim().toLowerCase();

    if (inputPesquisa === '') {
        document.getElementById('mensagem-erro').textContent = 'Por favor, insira um valor para pesquisa.';
        return;
    }

    let dados = obterDados(pesquisaPor, inputPesquisa);

    if (dados) {
        preencherDados(dados);
        document.getElementById('mensagem-erro').textContent = '';
    } else {
        document.getElementById('mensagem-erro').textContent = 'NÃO FORAM ENCONTRADOS DADOS PARA SUA PESQUISA';
        limparDados();
    }
}

document.getElementById('fechar').addEventListener('click', function() {
    limparDados();
    document.getElementById('mensagem-erro').textContent = '';
});

const bancoDados = [
    { nome: 'Alexander Flemming', crm: '999999', status: 'Ativo', especialidade: 'Clínico Geral', dataCadastro: '06/09/1891', login: 'alexander_flemming' },
    { nome: 'Sigmund Freud', crm: '888888', status: 'Ativo', especialidade: 'Neurologia', dataCadastro: '06/05/1856', login: 'sigmund_freud' },
    { nome: 'Edward Jenner', crm: '777777', status: 'Ativo', especialidade: 'Imunologia', dataCadastro: '17/05/1749', login: 'edward_jenner' },
    { nome: 'Joseph Lister', crm: '666666', status: 'Ativo', especialidade: 'Cirurgia', dataCadastro: '05/04/1827', login: 'joseph_lister' },
    { nome: 'Andreas Vesalius', crm: '555555', status: 'Ativo', especialidade: 'Anatomia', dataCadastro: '31/12/1514', login: 'andreas_vesalius' },
    { nome: 'William Osler', crm: '444444', status: 'Ativo', especialidade: 'Medicina Interna', dataCadastro: '12/07/1849', login: 'william_osler' },
    { nome: 'Ignaz Semmelweis', crm: '333333', status: 'Ativo', especialidade: 'Obstetrícia', dataCadastro: '01/07/1818', login: 'ignaz_semmelweis' },
    { nome: 'Hippocrates', crm: '222222', status: 'Ativo', especialidade: 'Medicina', dataCadastro: '01/01/460 AC', login: 'hippocrates' },
    { nome: 'Paracelsus', crm: '111111', status: 'Ativo', especialidade: 'Toxicologia', dataCadastro: '11/11/1493', login: 'paracelsus' },
    { nome: 'Avicenna', crm: '000000', status: 'Ativo', especialidade: 'Filosofia Médica', dataCadastro: '22/08/980', login: 'avicenna' }
];

function obterDados(pesquisaPor, valor) {
    valor = valor.toLowerCase();
    if (pesquisaPor === 'crm') {
        return bancoDados.find(dados => dados.crm.toLowerCase() === valor);
    } else if (pesquisaPor === 'nome') {
        return bancoDados.find(dados => dados.nome.toLowerCase().includes(valor));
    }
    return null;
}

function preencherDados(dados) {
    document.getElementById('nome').value = dados.nome;
    document.getElementById('crm-info').value = dados.crm;
    document.getElementById('status').value = dados.status;
    document.getElementById('especialidade').value = dados.especialidade;
    document.getElementById('data-cadastro').value = dados.dataCadastro;
    document.getElementById('login').value = dados.login;
}

function limparDados() {
    document.getElementById('nome').value = '';
    document.getElementById('crm-info').value = '';
    document.getElementById('status').value = '';
    document.getElementById('especialidade').value = '';
    document.getElementById('data-cadastro').value = '';
    document.getElementById('login').value = '';
}
