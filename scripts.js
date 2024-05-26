function clearForm() {
    document.getElementById('consultaForm').reset();
    document.getElementById('result').innerHTML = '';
}

function closeResult() {
    document.getElementById('consultaInfo').style.display = 'none';
    document.getElementById('consultaErro').style.display = 'none';
    document.getElementById('consulta').style.display = 'block';
}

document.getElementById('consultaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simular busca e resultados
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput === '123456789') {
        // Simular erro
        document.getElementById('consulta').style.display = 'none';
        document.getElementById('consultaErro').style.display = 'block';
    } else {
        // Simular sucesso
        document.getElementById('consulta').style.display = 'none';
        document.getElementById('consultaInfo').style.display = 'block';
        document.getElementById('nome').value = 'Dr Alexander Flemming';
        document.getElementById('status').value = 'Ativo';
        document.getElementById('especialidade').value = 'Clinico Geral';
        document.getElementById('dataCadastro').value = '06/09/1891';
        document.getElementById('crm').value = '999999';
        document.getElementById('login').value = 'login_exemplo';
    }
});
