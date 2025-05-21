document.addEventListener('DOMContentLoaded', () => {
  // Limite: 23/05/2025 às 19h BRT (22h UTC)
  const now = new Date();
  const limit = new Date('2025-05-23T22:00:00Z');
  if (now >= limit) return;

  // HTML do modal com classes externas
  const modalHTML = `
    <div id="launchModal" class="modal-polaroid">
      <div class="modal-polaroid-content">
        <button id="closeModal" class="modal-polaroid-close" aria-label="Fechar modal">&times;</button>
        <div class="modal-polaroid-image-wrapper">
          <img src="img/banner_yt.jpg" alt="Lançamento Bibi" loading="lazy">
        </div>
        <div class="modal-polaroid-button-wrapper">
          <a href="https://youtube.com/@bibisssmartinsss?si=HWZ3UsqShvWf49MG" target="_blank" class="modal-polaroid-cta">Inscreva-se</a>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Fecha o modal ao clicar no botão de fechar
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('launchModal')?.remove();
  });

  // Fecha o modal ao pressionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('launchModal')?.remove();
    }
  });
});
