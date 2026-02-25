// Select DOM elements
const videoElement = document.getElementById('video');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');

// Video data
const videos = [
    { title: 'Video 1', artist: 'Creator One', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'Video 2', artist: 'Creator Two', src: 'https://www.w3schools.com/html/movie.mp4' },
    { title: 'Video 3', artist: 'Creator Three', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' }
];


let videoIndex = 0;
let isPlaying = false;
let speed = 1;

// Load video
function loadVideo(video) {
    title.textContent = video.title;
    artist.textContent = video.artist;
    videoElement.src = video.src;
    videoElement.poster = video.poster;
}

// Initially load video
loadVideo(videos[videoIndex]);

// Play video
function playVideo() {
    playBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
    videoElement.play();
    isPlaying = true;
}

// Pause video
function pauseVideo() {
    playBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
    videoElement.pause();
    isPlaying = false;
}

// Previous video
function prevVideo() {
    videoIndex--;
    if (videoIndex < 0) videoIndex = videos.length - 1;
    loadVideo(videos[videoIndex]);
    playVideo();
}

// Next video
function nextVideo() {
    videoIndex++;
    if (videoIndex >= videos.length) videoIndex = 0;
    loadVideo(videos[videoIndex]);
    playVideo();
}

// Update progress
function updateProgress() {
    const { duration, currentTime } = videoElement; if (isNaN(duration)) return; const progressPercent = (currentTime / duration) * 100; progress.style.width = `${progressPercent}%`;
    // Time formatting 
    const formatTime = (time) => { const minutes = Math.floor(time / 60); let seconds = Math.floor(time % 60); if (seconds < 10) seconds = `0${seconds}`; return `${minutes}:${seconds}`; }; durationEl.textContent = formatTime(duration); currentTimeEl.textContent = formatTime(currentTime);
}
// Set progress 
function setProgress(e) {
    const width = this.clientWidth; const clickX = e.offsetX;
    const duration = videoElement.duration;
    videoElement.currentTime = (clickX / width) * duration;
}
// Event listeners 
playBtn.addEventListener('click', () => (isPlaying ? pauseVideo() : playVideo()));
prevBtn.addEventListener('click', prevVideo);
nextBtn.addEventListener('click', nextVideo);
videoElement.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
videoElement.addEventListener('ended', nextVideo);
volumeSlider.addEventListener('input', (e) => (videoElement.volume = e.target.value));
speedSelect.addEventListener('change', (e) => {
    speed = parseFloat(e.target.value);
    videoElement.playbackRate = speed;
});