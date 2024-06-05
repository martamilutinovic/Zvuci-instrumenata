document.addEventListener('DOMContentLoaded', function() {
    const soundImages = document.querySelectorAll('.sound');

    soundImages.forEach(img => {
        img.addEventListener('click', function() {
            const sound = new Audio(this.dataset.sound);
            sound.play();

            setTimeout(() => {
                sound.pause();
                sound.currentTime = 0;
            }, 5000);
        });
    });
});

