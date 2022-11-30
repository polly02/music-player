const audio = document.createElement("audio")

const play = document.querySelector(".play")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const title = document.querySelector("h1")
const singer = document.querySelector("h2")


let flag = false



const arr = [
    {
        src: "./music/1.mp3",
        title: "Unholy",
        singer: "Sam Smith",
        background: "background-image: url(./) "
    },
    {
        src: "./music/2.mp3",
        title: "Fall out",
        singer: "Louise Dowd"
    },
    {
        src: "./music/3.mp3",
        title: "You like game",
        singer: "OWEEK"
    },
    {
        src: "./music/4.mp3",
        title: "All the lies",
        singer: "OWEEK"
    },
    {
        src: "./music/5.mp3",
        title: "Supergirl",
        singer: "Anna Naklab"
    },
]

let indexCurrentSong = 0

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
    audio.play()
}
