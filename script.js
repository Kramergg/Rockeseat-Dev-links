function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#perfilzz');
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute('alt', 'Foto de perfil de Gabriel Kramer em modo claro');
  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Foto de perfil de Gabriel Kramer em modo escuro');
  }
}
