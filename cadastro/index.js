function showCadastro() {
    document.getElementById('cadastro').style.display = 'block';
    setTimeout(function() {
        window.location.href = window.location.origin + '/pesquisa/pesquisa.html';
    }, 1000);
  }