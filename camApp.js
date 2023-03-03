// Get the video element
const video = document.getElementById('video');

// Request camera access
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  // Set the stream as the source of the video element
  video.srcObject = stream;
  // Play the video
  video.play();
}).catch((error) => {
  console.error(error);
});