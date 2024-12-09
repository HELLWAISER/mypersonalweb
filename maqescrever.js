document.addEventListener("DOMContentLoaded", function () {
  // Verifica se a tela tem largura menor que 768px
  if (window.innerWidth < 768) {
    var typed = new Typed("#typed-contact", {
      strings: ["Clique no card para contatos"], 
      typeSpeed: 100, 
      backSpeed: 30, 
      loop: false, 
      showCursor: true, 
      cursorChar: "|", 
    });
  }
});
