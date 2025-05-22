const toggleBtn = document.getElementById('toggle');
const video = document.getElementById('video');
const volumeBtn = document.getElementById('volume');
const playbackSpeedBtn = document.getElementById('playbackSpeed');
const rewindBtn = document.getElementById('rewind');
const forwardBtn = document.getElementById('forward');
const progressFilled = document.querySelector('progress__filled');


toggleBtn.addEventListener('click',()=> {
	if(video.paused) {
		video.play();
		toggleBtn.textContent = `❚ ❚`;
	} else {
		video.pause();
		toggleBtn.textContent = `►`;
	}	
});

volumeBtn.addEventListener('click',()=>{
	video.volume=volumeBtn.value;
});
playbackSpeedBtn.addEventListener('click',()=>{
	video.playbackRate=playbackSpeedBtn.value;
});
rewindBtn.addEventListener('click',()=>{
	video.currentTime-=10;
});
forwardBtn.addEventListener('click',()=>{
	video.currentTime+=25;
});
video.addEventListener('timeUpdate', ()=> {
	const percent = (video.currentTime/video.duration) *100;
	progressFilled.style.width=`${percent}`;
});