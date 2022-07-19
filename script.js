const loadText = document.querySelector('.blur-text');
const picture = document.querySelector('.picture');


let load = 0;

let int = setInterval(blur, 30);

function blur() {
    load++;

    if(load > 99) {
        clearInterval(int)
    };

    loadText.innerText = `${load}%`;
    loadText.style.opacity = blurScale(load, 0, 100, 1 ,0);
    picture.style.filter = `blur(${blurScale(load, 0, 100, 30, 0)}px)`
}

const blurScale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * ( out_max - out_min) / (in_max - in_min) + out_min;
}