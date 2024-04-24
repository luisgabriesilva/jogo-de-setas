document.addEventListener('DOMContentLoaded', function () {
    var imagem = document.getElementById("imagem");
    var topPos = 200;
    var leftPos = 200;

    document.addEventListener('keydown', function (event) {
        var key = event.key;

        switch (key) {
            case 'ArrowUp':
                topPos -= 10;
                break;
            case 'ArrowDown':
                topPos += 10;
                break;
            case 'ArrowLeft':
                leftPos -= 10;
                break;
            case 'ArrowRight':
                leftPos += 10;
                break;
        }

        // Corrigindo a atribuição dos estilos
        imagem.style.top = topPos + 'px';
        imagem.style.left = leftPos + 'px';
    });
});