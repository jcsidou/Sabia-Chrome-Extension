(function() {

  function injectLinks() {

    const selectors = [
      "div[id^='divProcessoLembrete'] > a",
      "#divInfraAreaTabela > table > tbody > tr > td:nth-child(2) > a"
    ];
    
    const anchors = document.querySelectorAll(selectors.join(", "));
    
    anchors.forEach(anchor => {
      const params = new URL(anchor.href).searchParams;
      const num = params.get('num_processo');
      if (num && !anchor.nextElementSibling?.textContent?.includes("ia")) {
        const iaLink = document.createElement('a');
        const img = document.createElement('img');
        img.src = 'https://github.com/jcsidou/Sabia-Chrome-Extension/blob/main/Sabia.png?raw=true';
        img.style.height = '16px';
        img.style.verticalAlign = 'middle';
        iaLink.appendChild(img);
        iaLink.href = 'http://google.com/' + num;
        iaLink.style.marginLeft = '8px';
        iaLink.target = '_blank';
        iaLink.title = 'Clique para abrir o processo '+num+' no Sabia';
        anchor.insertAdjacentElement('afterend', iaLink);
      }
    });
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    injectLinks();
  }

  document.addEventListener('DOMContentLoaded', injectLinks);
})();
