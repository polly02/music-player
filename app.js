const play = document.querySelector(".play")
const audio = document.createElement("audio")
let flag = false

const arr = [
    {
        src: "./music/1.mp3",
        "title": "Unholy",
        "singer": "Sam Smith",
        "background": "background-image: url(./) "
    },
    {
        src: "./music/2.mp3",
        "title": "Fall out",
        "singer": "Louise Dowd"
    },
    {
        src: "./music/3.mp3",
        "title": "You like game",
        "singer": "OWEEK"
    },
    {
        src: "./music/4.mp3",
        "title": "All the lies",
        "singer": "OWEEK"
    },
    {
        src: "./music/5.mp3",
        "title": "Supergirl",
        "singer": "Anna Naklab"
    },
]

let indexCurrentSong = 0

play.addEventListener("click", () => {
    currentSong()
})

document.querySelector(".next").addEventListener("click", () => {
    if (indexCurrentSong === arr.length - 1) {
        indexCurrentSong = 0
    } else {
        indexCurrentSong++
    }
    changeSong()

})

document.querySelector(".prev").addEventListener("click", () => {
    if (indexCurrentSong === 0) {
        indexCurrentSong = arr.length - 1
    } else {
        indexCurrentSong--
    }
    changeSong()

})

function changeSong() {
    audio.src = arr[indexCurrentSong].src
    audio.play()
}

function currentSong() {
    audio.src = arr[indexCurrentSong].src
    if (flag === false) {
        audio.play()
        play.innerHTML.style = "background-image: background-image: url(./assets/pauseBtn.svg), width: 38px, height: 38px"
       
        // play.textContent = "выключить"
        flag = true
    } else {
        audio.pause()
        play.innerHTML.style = "background-image: background-image: url(./assets/playBtn.svg), width: 38px, height: 38px"

        // play.textContent = "включить"
        flag = false
    }
}
