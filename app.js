const audio = document.createElement("audio")

const play = document.querySelector(".play")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const title = document.querySelector("h1")
const singer = document.querySelector("h2")
const image = document.querySelector("img")
const duration = document.querySelector(".line-duration")
const line = document.querySelector('.line')
const time = document.querySelector('.time')

const arr = [
    {
        src: "./music/1.mp3",
        title: "Unholy",
        singer: "Sam Smith",
        image: "./png/unholy.png"
    },
    {
        src: "./music/2.mp3",
        title: "Fall out",
        singer: "Louise Dowd",
        image: "./png/fallout.png"
    },
    {
        src: "./music/3.mp3",
        title: "You like game",
        singer: "OWEEK",
        image: "./png/oweek.png"
    },
    {
        src: "./music/4.mp3",
        title: "All the lies",
        singer: "OWEEK",
        image: "./png/oweek.png"
    },
    {
        src: "./music/5.mp3",
        title: "Supergirl",
        singer: "Anna Naklab",
        image: "./png/supergirl.png"
    },
]

let flag = false
let indexCurrentSong = 0

// audio.src = arr[indexCurrentSong].src
// title.innerHTML = songs[indexCurrentSong].title;
// singer.innerHTML = songs[indexCurrentSong].author;
// image.src = songs[indexCurrentSong].image;
// audioTag.src = songs[indexOfSong].src;

play.addEventListener("click", () => {
    currentSong()
})

next.addEventListener("click", () => {
    if (indexCurrentSong === arr.length - 1) {
        indexCurrentSong = 0
    } else {
        indexCurrentSong++
    }
    changeSong()
})

prev.addEventListener("click", () => {
    if (indexCurrentSong === 0) {
        indexCurrentSong = arr.length - 1
    } else {
        indexCurrentSong--
    }
    changeSong()
})

function currentSong() {
    audio.src = arr[indexCurrentSong].src
    title.innerHTML = arr[indexCurrentSong].title
    singer.innerHTML = arr[indexCurrentSong].singer
    image.src = arr[indexCurrentSong].image
    if (flag === false) {
        audio.play()
        play.style = "background-image: url(./assets/pauseBtn.svg)"
        flag = true
    } else {
        audio.pause()
        play.style = "background-image: url(./assets/playBtn.svg)"
        flag = false
    }
}

function changeSong() {
    audio.src = arr[indexCurrentSong].src
    title.innerHTML = arr[indexCurrentSong].title
    singer.innerHTML = arr[indexCurrentSong].singer
    image.src = arr[indexCurrentSong].image
    audio.play()
}

audio.addEventListener('timeupdate', (event) => {
    const duration = event.target.duration;
    const currentTime = event.target.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    line.style.width = `${progressPercent}%`;

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentMin < 10) currentMin = `0${currentMin}`;
    if (currentSec < 10) currentSec = `0${currentSec}`;
    time.innerText = `${currentMin}:${currentSec}`;
});

function setProgress(event) {
    const width = this.clientWidth;
    const clickLineProgress = event.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickLineProgress / width) * duration;
}

duration.addEventListener('click', setProgress);

audio.addEventListener('ended', () => {
    if (indexCurrentSong === arr.length - 1) {
        indexCurrentSong = 0;
    } else {
        indexCurrentSong++;
    }
    changeSong();
});
