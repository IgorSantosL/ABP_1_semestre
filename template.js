document.getElementById("btnLogin").addEventListener("click", function() {
    window.location.href = "./login.html";
});

document.getElementById('hamburger').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');

    // Alterna a classe 'open' para abrir e fechar a barra lateral
    sidebar.classList.toggle('open');
    content.classList.toggle('open');
});