// Get the iframe element
const iframe = document.querySelector('iframe');

// Get the iframe's content window
const iframeWindow = iframe.contentWindow;

// Access the getUserMedia API in the iframe's content window
const getUserMedia = iframeWindow.navigator.mediaDevices.getUserMedia;

// Request camera access
getUserMedia({ video: true })
  .then((stream) => {
    // Get the video element in the iframe
    const video = iframeWindow.document.querySelector('video');

    // Set the stream as the source of the video element
    video.srcObject = stream;

    // Play the video
    video.play();
  })
  .catch((error) => {
    console.error(error);
  });

// In this code, we first get a reference to the iframe element and its content window.
// We then access the getUserMedia API in the iframe's content window and request camera
// access using the video constraint. Once access is granted, we get a reference to the
// video element inside the iframe, set the stream as its source, and play the video. If
// an error occurs, we log it to the console.
