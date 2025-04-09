function startLoading() {
    const progressBar = document.getElementById('progressBar');
    const statusText = document.getElementById('statusText');
    const startButton = document.getElementById('startButton');
    
    let progress = 0;
    startButton.disabled = true;
    
    const interval = setInterval(() => {
      progress += 1;
      progressBar.style.width = progress + '%';
      statusText.textContent = `Прогресс: ${progress}%`;
      
      if (progress >= 100) {
        clearInterval(interval);
        startButton.disabled = false;
        statusText.textContent = 'Загрузка завершена!';
        statusText.style.color = '#4caf50';
        statusText.style.fontWeight = 'bold';
      }
    }, 100);
  }
  
  document.getElementById('startButton').addEventListener('click', startLoading);