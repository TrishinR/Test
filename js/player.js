function pauseVideo()
{
    var theVideo = document.querySelector('#v1');
    theVideo.pause();
}

// Play button, required by browsers to grab user interaction before autoplaying videos.
document.querySelector('#play-button').addEventListener("click", function(e){
	startStuff();
//this.style.display = 'none';
}, false);
	  
// Pause video button.
document.querySelector('#pause-button').addEventListener("click", function(e){
	pauseVideo();
//this.style.display = 'none';
}, false);

function startStuff(){
    var theVideo = document.querySelector('#v1');
	theVideo.setAttribute("playsinline", true);
    theVideo.play();
}
