document.querySelectorAll('.offcanvas .nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do navegador
    const targetId = this.getAttribute('href'); // Obtém o ID do destino
    const targetElement = document.querySelector(targetId);

    // Fecha o Offcanvas
    const offcanvas = document.querySelector('.offcanvas.show');
    if (offcanvas) {
      const bootstrapOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      bootstrapOffcanvas.hide();

      // Aguarda o Offcanvas fechar antes de rolar para a seção
      bootstrapOffcanvas._element.addEventListener('hidden.bs.offcanvas', () => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave
        }
      });
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave direta se não houver Offcanvas
    }
  });
});
