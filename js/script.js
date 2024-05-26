document.getElementById('botaoLimpar').addEventListener('click', function() {
    document.getElementById('consulta-form').reset();
    document.getElementById('mensagemErro').textContent = '';
    limparDados();
    console.log('Dados limpos');
});

document.getElementById('botaoPesquisar').addEventListener('click', function() {
    realizarPesquisa();
});

document.getElementById('consulta-form').addEventListener('submit', function(event) {
    event.preventDefault();
    realizarPesquisa();
});

function realizarPesquisa() {
    const pesquisaPor = document.querySelector('input[name="pesquisaPor"]:checked').value;
    const inputPesquisa = document.getElementById('inputPesquisa').value.trim().toLowerCase();

    console.log(`Pesquisa por: ${pesquisaPor}, Valor: ${inputPesquisa}`);

    if (inputPesquisa === '') {
        document.getElementById('mensagemErro').textContent = 'Por favor, insira um valor para pesquisa.';
        return;
    }

    let dados = obterDados(pesquisaPor, inputPesquisa);

    if (dados) {
        console.log('Dados encontrados:', dados);
        preencherDados(dados);
        document.getElementById('mensagemErro').textContent = '';
    } else {
        console.log('Nenhum dado encontrado para a pesquisa:', inputPesquisa);
        document.getElementById('mensagemErro').textContent = 'NÃO FORAM ENCONTRADOS DADOS PARA SUA PESQUISA';
        limparDados();
    }
}

document.getElementById('botaoFechar').addEventListener('click', function() {
    fecharAplicativo();
});

const bancoDados = [
    { nome: 'Lucas Costalonga', crm: '999999', status: 'Ativo', especialidade: 'Clínico Geral', dataCadastro: '06/09/1891', login: 'lucas_costalonga' },
    { nome: 'Erica Neves', crm: '888888', status: 'Ativo', especialidade: 'Neurologia', dataCadastro: '06/05/1856', login: 'erica_neves' },
    { nome: 'Italo Vieira', crm: '777777', status: 'Ativo', especialidade: 'Imunologia', dataCadastro: '17/05/1749', login: 'italo_vieira' },
    { nome: 'Junio Braz', crm: '666666', status: 'Ativo', especialidade: 'Cirurgia', dataCadastro: '05/04/1827', login: 'junio_braz' },
    { nome: 'Kauan Pedro', crm: '555555', status: 'Ativo', especialidade: 'Anatomia', dataCadastro: '31/12/1514', login: 'kauan_pedro' },
    { nome: 'Marcio Colusso', crm: '444444', status: 'Ativo', especialidade: 'Medicina Interna', dataCadastro: '12/07/1849', login: 'marcio_colusso' }
];

function obterDados(pesquisaPor, valor) {
    valor = valor.toLowerCase();
    console.log(`Buscando por ${pesquisaPor}: ${valor}`);
    if (pesquisaPor === 'crm') {
        let resultado = bancoDados.find(dados => dados.crm.toLowerCase() === valor);
        console.log('Resultado da busca por CRM:', resultado);
        return resultado;
    } else if (pesquisaPor === 'nome') {
        let resultado = bancoDados.find(dados => dados.nome.toLowerCase().split(' ').some(parte => parte.includes(valor)));
        console.log('Resultado da busca por nome:', resultado);
        return resultado;
    }
    return null;
}

function preencherDados(dados) {
    console.log('Preenchendo dados:', dados);
    document.getElementById('campoNome').value = dados.nome;
    document.getElementById('campoCrm').value = dados.crm;
    document.getElementById('campoStatus').value = dados.status;
    document.getElementById('campoEspecialidade').value = dados.especialidade;
    document.getElementById('campoDataCadastro').value = dados.dataCadastro;
    document.getElementById('campoLogin').value = dados.login;
}

function limparDados() {
    document.getElementById('campoNome').value = '';
    document.getElementById('campoCrm').value = '';
    document.getElementById('campoStatus').value = '';
    document.getElementById('campoEspecialidade').value = '';
    document.getElementById('campoDataCadastro').value = '';
    document.getElementById('campoLogin').value = '';
    console.log('Campos de dados limpos');
}

function fecharAplicativo() {
    console.log('Tentando fechar a janela...');
    if (window.close) {
        window.close();
    } else {
        alert('Por favor, feche a aba do navegador manualmente.');
    }
}
