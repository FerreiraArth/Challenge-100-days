const tabs = document.querySelectorAll('.tab-btn');
//pegar todos os botoes que tiverem a classe tab-btn

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));
//pra cada elemento que estiver dentro de tabs adicionamos um evento de clique  => quando clicado adiciona uma funçao

const tabClicked = (tab) => {
    const contents = document.querySelectorAll('.content');
    //pegara todos com a classe .content

    contents.forEach(content => content.classList.remove('show'))
    //pegando-a removera a classe show, caso ja tenha algum selecionado

    const contentId = tab.getAttribute('content-id');
    //pegara o atributo de content-id
    const content = document.getElementById(contentId);
    //pegara a id que for igual ao contentId

    content.classList.add('show')
    //adicionara a classe show que for igual a content
}