function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')  /*  a função "toggle ja tem as configurações essenciais para trocar de cor no caso do projeto" */

  //  if (html.classList.contains('light')) {/* Se (html. + lista de classes do html + contém  + ('light')) /// verificar a classe (contains) */
  //  html.classList.remove('light') /*  vou pegar meu documento html + e procurar a lista de classes + remover a classe + 'light' /// remover a classe (remove)*/
  //  } else { /*se não*/
  //     html.classList.add('light') /* adicionar o documento html //// ou adicionar a classe (add) */
  //  }

  //================================================================//
  // tem que pegar a tag img
  const img = document.querySelector('#profile img') /* querySelector = é um função (query = pesquisa + pelo + Selector = seletor)*/
  if (html.classList.contains('light')) {
    //SE tiver light modde, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png') // setAttribute = adicionar/ajustar/ mododificar o atributo
  } else {
    //SE não tiver light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }

  //================================================================//

  const descricao = document.querySelector('#perfilzz alt')
  if (html.classList.contains('alt')) {

    descricao.setAttribute('alt', "light perfil de Gabriel Kramer")
  } else {

    descricao.setAttribute('alt', "Foto de perfil de Gabriel Kramer modo noturno")
  }

}