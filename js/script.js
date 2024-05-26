document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('consulta-form').reset();
    document.getElementById('mensagem-erro').textContent = '';
    limparDados();
});

document.getElementById('pesquisar').addEventListener('click', function() {
    const pesquisaPor = document.querySelector('input[name="pesquisaPor"]:checked').value;
    const inputPesquisa = document.getElementById('inputPesquisa').value.trim();

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
});

document.getElementById('fechar').addEventListener('click', function() {
    limparDados();
});

function obterDados(pesquisaPor, valor) {
    // Simulando um banco de dados
    const bancoDados = [
        { nome: 'Dr Alexander Flemming', crm: '999999', status: 'Ativo', especialidade: 'Clínico Geral', dataCadastro: '06/09/1891', login: 'alexander_flemming' },
        // Adicione mais registros conforme necessário
    ];

    for (let dados of bancoDados) {
        if (pesquisaPor === 'crm' && dados.crm === valor) {
            return dados;
        } else if (pesquisaPor === 'nome' && dados.nome.toLowerCase() === valor.toLowerCase()) {
            return dados;
        }
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
