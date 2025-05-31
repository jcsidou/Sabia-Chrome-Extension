(function() {
  // Função que faz o trabalho
  function injectLinks() {
    // console.log("[IA Injector] injetando links...");
    const anchors = document.querySelectorAll("div[id^='divProcessoLembrete'] > a");
    anchors.forEach(anchor => {
      const params = new URL(anchor.href).searchParams;
      const num = params.get('num_processo');
      // console.log("[IA Injector] href:", anchor.href, "→ num_processo =", num);
      if (num && !anchor.nextElementSibling?.textContent?.includes("ia")) {
        const iaLink = document.createElement('a');
        // iaLink.textContent = 'ia';
        const img = document.createElement('img');
        img.src = 'https://github.com/jcsidou/Sabia-Chrome-Extension/blob/main/Sabia.png?raw=true';
        img.style.height = '16px'; // ajuste o tamanho conforme necessário
        img.style.verticalAlign = 'middle';
        iaLink.appendChild(img);
        iaLink.href = 'http://google.com/' + num;
        iaLink.style.marginLeft = '8px';
        iaLink.target = '_blank';
        iaLink.title = 'Clique para abrir o processo '+num+' no Sabia'; // Adicione esta linha
        anchor.insertAdjacentElement('afterend', iaLink);
        // console.log("[IA Injector] link inserido:", iaLink.outerHTML);
      }
    });
  }

  // Se já estiver carregado, executa imediatamente
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    injectLinks();
  }

  // E também registra para quando receber o evento
  document.addEventListener('DOMContentLoaded', injectLinks);
})();
