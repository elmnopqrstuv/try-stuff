const boxes = document.querySelectorAll('.box');
        const hoverSound = document.getElementById('hoverSound');
        const gunshotSound = document.getElementById('gunshotSound');
        const upsetSound = document.getElementById('clickSound');

        // Initial user interaction to enable audio context
        document.body.addEventListener('click', () => {
            hoverSound.play().catch(e => console.log('Audio playback prevented:', e));
            hoverSound.pause();
        }, { once: true });

        boxes.forEach(box => {
            // Play hover sound when mouse enters
            box.addEventListener('mouseenter', () => {
                hoverSound.currentTime = 0;
                hoverSound.play();
            });

            // Play gunshot and upset sound on mousedown
            box.addEventListener('mousedown', () => {
                hoverSound.pause();
                clickSound.currentTime = 0;
                clickSound.play();
                gunshotSound.currentTime = 0;
                gunshotSound.play();
                
            });
             // Stop both sounds when mouse leaves
            box.addEventListener('mouseleave', () => {
                hoverSound.pause();
                hoverSound.currentTime = 0;
                gunshotSound.pause();
                gunshotSound.currentTime = 0;
                clickSound.pause();
                clickSound.currentTime = 0;
            });
            // Stop gunshot and upset sound when mouse is no longer held down
            box.addEventListener('mouseup', () => {
                gunshotSound.pause();
                gunshotSound.currentTime = 0;
                clickSound.pause();
                clickSound.currentTime = 0;
                hoverSound.play();
            });
        });