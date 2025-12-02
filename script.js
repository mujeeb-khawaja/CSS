let currentSong = new Audio();
let currentPlayingSongElement = null;

async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = []
    
    for (const element of as) {
        if (element.href.endsWith('.mp3')) {
            songs.push(element.href.split("/songs/")[1]);
        }
    }
    console.log(songs);
    return songs;
}

const playMusic = (songName, imageUrl, songElement, pause=false) => {
    // Reset previous playing song icon
    if (currentPlayingSongElement) {
        const prevIcon = currentPlayingSongElement.querySelector('.song-play-icon');
        if (prevIcon) {
            prevIcon.classList.remove('fa-circle-pause');
            prevIcon.classList.add('fa-circle-play');
        }
    }

    // Update current playing song
    currentPlayingSongElement = songElement;
    if (songElement) {
        const currentIcon = songElement.querySelector('.song-play-icon');
        if (currentIcon) {
            currentIcon.classList.remove('fa-circle-play');
            currentIcon.classList.add('fa-circle-pause');
        }
    }

    currentSong.src = "/songs/" + songName + ".mp3";
    if(!pause){
        currentSong.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    }
    document.querySelector(".songName").innerHTML = decodeURI(songName);
    document.querySelector(".songimg").src = imageUrl;
    document.querySelector(".songTime").innerHTML = "0:00";
}

async function main() {
    let songs = await getSongs();
    console.log(songs);

    // Array of images from the existing cards
    const images = [
        "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&h=300&fit=crop"
    ];

    let songUL = document.querySelector('.songList').getElementsByTagName('ul')[0];
    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];
        const songName = song.replaceAll('%20', ' ').replace('.mp3', '');
        const imageUrl = images[i % images.length];
        
        songUL.innerHTML = songUL.innerHTML + `
            <li class="song-item">
                <div class="song-item-left">
                    <img src="${imageUrl}" alt="${songName}">
                    <div class="song-details">
                        <div class="song-info">
                            <div class="song-name">${songName}</div>
                            <div class="song-type">Song</div>
                        </div>
                    </div>
                </div>
                <div class="song-details-library">
                    <span class="playNow">Play Now</span>
                    <i class="song-play-icon fa-regular fa-circle-play"></i>
                </div>
            </li>
        `;
    }

    // Load the first song after the list is created
    const firstSongElement = document.querySelector('.songList').getElementsByTagName('li')[0];
    playMusic(songs[0].replaceAll('%20', ' ').replace('.mp3', ''), "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=300&h=300&fit=crop", firstSongElement, true);

    Array.from(document.querySelector('.songList').getElementsByTagName('li')).forEach((e) => {
        e.addEventListener('click', () => {
            const songName = e.querySelector(".song-name").innerHTML.trim();
            const imageUrl = e.querySelector("img").src;
            console.log(songName, imageUrl);
            playMusic(songName, imageUrl, e);
        })
    });

    // Attached event listener for buttons
    play.addEventListener('click', () => {
        if (currentSong.paused) {
            currentSong.play();
            play.classList.remove('fa-circle-play');
            play.classList.add('fa-circle-pause');
            
            // Update the currently playing song icon
            if (currentPlayingSongElement) {
                const icon = currentPlayingSongElement.querySelector('.song-play-icon');
                if (icon) {
                    icon.classList.remove('fa-circle-play');
                    icon.classList.add('fa-circle-pause');
                }
            }
        } else {
            currentSong.pause();
            play.classList.remove('fa-circle-pause');
            play.classList.add('fa-circle-play');
            
            // Update the currently playing song icon
            if (currentPlayingSongElement) {
                const icon = currentPlayingSongElement.querySelector('.song-play-icon');
                if (icon) {
                    icon.classList.remove('fa-circle-pause');
                    icon.classList.add('fa-circle-play');
                }
            }
        }
    })

    // Listen for time updates 
    currentSong.addEventListener('timeupdate', () => {
        const currentTime = Math.floor(currentSong.currentTime);
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;
        const progress = (currentSong.currentTime / currentSong.duration) * 100;
        
        document.querySelector('.songTime').innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        document.querySelector('.circle').style.left = `${progress}%`;
        document.querySelector('.seekbar').style.setProperty('--progress', `${progress}%`);
    })

    // Add an event listener to seekbar
    document.querySelector('.seekbar').addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const progress = (clickX / rect.width) * 100;
        currentSong.currentTime = (progress / 100) * currentSong.duration;
        document.querySelector('.circle').style.left = `${progress}%`;
        document.querySelector('.seekbar').style.setProperty('--progress', `${progress}%`);
    })

    // Add even listenner for next song
    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        const songs = Array.from(document.querySelector('.songList').getElementsByTagName('li'));
        const currentIndex = songs.indexOf(currentPlayingSongElement);
        if (currentIndex < songs.length - 1) {
            const nextSong = songs[currentIndex + 1];
            const songName = nextSong.querySelector(".song-name").innerHTML.trim();
            const imageUrl = nextSong.querySelector("img").src;
            console.log(songName, imageUrl);
            playMusic(songName, imageUrl, nextSong);
        }
    })

    // Add even listenner for previous song
    const prev = document.getElementById('previous');
    prev.addEventListener('click', () => {
        const songs = Array.from(document.querySelector('.songList').getElementsByTagName('li'));
        const currentIndex = songs.indexOf(currentPlayingSongElement);
        if (currentIndex > 0) {
            const prevSong = songs[currentIndex - 1];
            const songName = prevSong.querySelector(".song-name").innerHTML.trim();
            const imageUrl = prevSong.querySelector("img").src;
            console.log(songName, imageUrl);
            playMusic(songName, imageUrl, prevSong);
        }
    })

    // Add even listener for hamburger menu
    document.getElementById('hamburger').addEventListener('click', () => {
        document.querySelector('.left').style.left = "0";
        document.querySelector('.left').style.width = "auto";
    })

    // Add even listener for close button
    document.getElementById('close').addEventListener('click', () => {
        document.querySelector('.left').style.left = "-100%";
        document.querySelector('.left').style.width = "0";
    })
}

main();