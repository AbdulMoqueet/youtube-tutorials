const buttons = document
    .querySelector('.buttons');

const screen = document
    .querySelector('.screen');

const audio = document
    .querySelector('audio');

buttons
    .addEventListener('click', (e) => {

        let value = e.target.textContent;
        let screenVal = screen.textContent;

        audio.play();


        switch (value) {
            case 'C':
                screen.textContent = '';
                screenVal = screen.textContent;
                return;

            case '=':
                screen.textContent = eval(screenVal.replace('×', '*'));
                return;

            case '×2':
                screen.textContent = eval(screenVal * screenVal);
                return;

            case '':
                screen.textContent = screenVal.substring(0, screenVal.length-1);
                return;
        }

        screen.textContent = screenVal + value;

    });