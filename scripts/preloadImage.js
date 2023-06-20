var image = new Image();

// Set the source of the image
image.src = 'images/ausitn.jpeg';

// Preload the image
image.onload = function() {
// The image has been preloaded
console.log('Image preloaded!');
};