

let sound = document.querySelector("#sound");
let playBtn = document.querySelector("#play-button");
let pauseBtn = document.querySelector("#pause-button");
let volumeBtn = document.querySelector("#volume-button");


playBtn.addEventListener('click', function () {
    sound.play();
});

pauseBtn.addEventListener('click', function () {
    sound.pause();
});

volumeBtn.addEventListener('click', function () {
    sound.volume = 0.5;
});
