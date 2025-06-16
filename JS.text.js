(function() {
    const modal = document .getElementById('welcomeModal');
    const closeBtn = document .getElementById('closeModal');
    const startBtn = document .getElementById('startBtn');

    // Focus the close button on open for accessibility
    closeBtn.focus();

    function closeModal() {
        modal.style.animation = 'fadeOut 0.3s ease forwards';
        modal.querySelector('.modal').style.animation = 'slideUp 0.3s ease forwards';
        modal.addEventListener('animationend',() => {
            modal.remove();
        }, { once: true});
        
    }

    closeBtn.addEventListener('click', closeModal);
    startBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.contains(modal)) {
            closeModal();
        }
    });
  })();  
