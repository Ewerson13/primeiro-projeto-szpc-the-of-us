const botoesCarrossel = document.querySelectorAll('.botao');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        const imagens = document.querySelectorAll('.imagem');

        botao.classList.add('selecionado');

const imagemAtiva = document.querySelector('.ativa');
imagemAtiva.classList.remove('ativa');

imagens[indice].classList.add('ativa')
    })
})