document.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.line');
  let currentLine = 0;

  const revealLine = () => {
      if (currentLine < lines.length) {
          lines[currentLine].classList.add('visible');
          currentLine++;
          setTimeout(revealLine, 2000); // Revela cada línea después de 2 segundos
      }
  };

  // Inicia la revelación de líneas
  revealLine();

  // Botón para mostrar la última parte
  const showMoreBtn = document.getElementById('show-more-btn');
  showMoreBtn.addEventListener('click', () => {
      lines.forEach(line => line.classList.add('visible'));
      showMoreBtn.style.display = 'none'; // Oculta el botón al hacer clic
  });
});
