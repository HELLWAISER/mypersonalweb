// mensagem de alerta no slide 4 (orkut) 
function verificarTela(event, url) {
  if (window.innerWidth < 1024) {
    const confirmar = confirm("ATENÇÃO: visualização ideal SOMENTE em TELAS MAIORES, pois se tratar de uma cópia fíel do Orkut (caso continue clique no botão Login na tela do Orkut).  Deseja continuar ?");
    if (!confirmar) {
      event.preventDefault(); // Impede a abertura do link se o usuário cancelar
      return false;
    }
  }
  return true; // Permite abrir o link se o usuário confirmar ou estiver em tela grande
}
