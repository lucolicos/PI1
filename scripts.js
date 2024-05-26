document.addEventListener("DOMContentLoaded", function() {
    // Exibir a seção inicial
    showSection('homepage');

    // Adicionar evento de submit ao formulário de consulta
    document.getElementById('consultaForm').addEventListener('submit', function(e) {
        e.preventDefault();
        searchLogin();
    });

    // Função para exibir a seção correta
    function showSection(sectionId) {
        // Ocultar todas as seções
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Exibir a seção solicitada
        document.getElementById(sectionId).style.display = 'block';
    }

    // Função para limpar o formulário
    window.clearForm = function() {
        document.getElementById('consultaForm').reset();
        document.getElementById('result').innerHTML = '';
    }

    // Função para fechar o resultado e voltar à consulta
    window.closeResult = function() {
        showSection('consulta');
    }

    // Função para simular a busca de login
    function searchLogin() {
        const searchInput = document.getElementById('searchInput').value;
        if (searchInput === '123456789') {
            // Simular erro
            showSection('consultaErro');
        } else {
            // Simular sucesso
            showSection('consultaInfo');
            document.getElementById('nome').value = 'Dr Alexander Flemming';
            document.getElementById('status').value = 'Ativo';
            document.getElementById('especialidade').value = 'Clinico Geral';
            document.getElementById('dataCadastro').value = '06/09/1891';
            document.getElementById('crm').value = '999999';
            document.getElementById('login').value = 'login_exemplo';
        }
    }
});
