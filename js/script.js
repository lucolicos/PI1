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
    document.getElementById('mensagem-erro').textContent = '';
});

const bancoDados = [
    { nome: 'Dr Alexander Flemming', crm: '999999', status: 'Ativo', especialidade: 'Clínico Geral', dataCadastro: '06/09/1891', login: 'alexander_flemming' },
    { nome: 'Dr Sigmund Freud', crm: '888888', status: 'Ativo', especialidade: 'Neurologia', dataCadastro: '06/05/1856', login: 'sigmund_freud' },
    { nome: 'Dr Edward Jenner', crm: '777777', status: 'Ativo', especialidade: 'Imunologia', dataCadastro: '17/05/1749', login: 'edward_jenner' },
    { nome: 'Dr Joseph Lister', crm: '666666', status: 'Ativo', especialidade: 'Cirurgia', dataCadastro: '05/04/1827', login: 'joseph_lister' },
    { nome: 'Dr Andreas Vesalius', crm: '555555', status: 'Ativo', especialidade: 'Anatomia', dataCadastro: '31/12/1514', login: 'andreas_vesalius' },
    { nome: 'Dr William Osler', crm: '444444', status: 'Ativo', especialidade: 'Medicina Interna', dataCadastro: '12/07/1849', login: 'william_osler' },
    { nome: 'Dr Ignaz Semmelweis', crm: '333333', status: 'Ativo', especialidade: 'Obstetrícia', dataCadastro: '01/07/1818', login: 'ignaz_semmelweis' },
    { nome: 'Dr Hippocrates', crm: '222222', status: 'Ativo', especialidade: 'Medicina', dataCadastro: '01/01/460 AC', login: 'hippocrates' },
    { nome: 'Dr Paracelsus', crm: '111111', status: 'Ativo', especialidade: 'Toxicologia', dataCadastro: '11/11/1493', login: 'paracelsus' },
    { nome: 'Dr Avicenna', crm: '000000', status: 'Ativo', especialidade: 'Filosofia Médica', dataCadastro: '22/08/980', login: 'avicenna' }
];

function calcularDistanciaLevenshtein(a, b) {
    const matrix = [];
    let i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    let j;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function obterDados(pesquisaPor, valor) {
    let dadosEncontrados = null;
    let menorDistancia = Infinity;

    for (let dados of bancoDados) {
        if (pesquisaPor === 'crm' && dados.crm === valor) {
            return dados;
        } else if (pesquisaPor === 'nome') {
            let distancia = calcularDistanciaLevenshtein(dados.nome.toLowerCase(), valor.toLowerCase());
            if (distancia < menorDistancia) {
                menorDistancia = distancia;
                dadosEncontrados = dados;
            }
        }
    }
    return dadosEncontrados;
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
