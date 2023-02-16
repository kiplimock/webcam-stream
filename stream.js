const video = document.querySelector("#myVidPlayer");

var w, h;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
        video.play();

        // new
        w = video.videoWidth;
        h = video.videoHeight;
    };
}).catch(error => {
    alert("You have to enable the mic and the camera");
})