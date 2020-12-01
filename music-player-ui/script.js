let isPlaying = false;

window.onload = () => {

    const btnOk = document.querySelector('.the-blood-coders__ok-btn');

    btnOk.addEventListener('click', (e) => {
        e.target.closest('.the-blood-coders__backdrop').remove();
    });

    const player = document
        .getElementById('player');

    const playBtn = document
        .querySelector('.pause');

    playBtn.addEventListener('click', () => {

        if (!isPlaying) {
            playBtn.classList.remove('ri-play-circle-line');
            playBtn.classList.add('ri-pause-circle-line');
            player.play();
            isPlaying = true;
        } else {
            playBtn.classList.remove('ri-pause-circle-line');
            playBtn.classList.add('ri-play-circle-line');
            player.pause();
            isPlaying = false;
        }

    });

}