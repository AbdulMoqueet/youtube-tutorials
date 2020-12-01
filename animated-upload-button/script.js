let isClickAble = true;


const btn = document
    .querySelector('.btn');

const btnText = document
    .querySelector('.btn-text');

const progress = document
    .querySelector('.progress');

document
    .querySelector('.upload-btn')
    .addEventListener('click', () => {

        if (!isClickAble)
            return;

        isClickAble = false;

        btn.classList.remove('toggle--upload');
        btnText.classList.remove('toggle--upload-text');
        progress.classList.remove('toggle--progress');

        setTimeout(() => {
            btn.classList.add('toggle--upload');
            btnText.classList.add('toggle--upload-text');
            progress.classList.add('toggle--progress');
        }, 50);

        setTimeout(() => {
            btnText.textContent = 'Uploading...';
        }, 300);

    });

btnText.addEventListener('webkitAnimationEnd', () => {
    setTimeout(() => {
        btnText.textContent = 'Upload';
        isClickAble = true;
    }, 2000);
});

const btnOk = document.querySelector('.the-blood-coders__ok-btn');

btnOk.addEventListener('click', (e) => {
    e.target.closest('.the-blood-coders__backdrop').remove();
});