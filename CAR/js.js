// Get the car elements
const body = document.querySelector('.car-body');
const frontFace = document.querySelector('.front-face');
const rearFace = document.querySelector('.rear-face');

// Set the colors and positions of the faces
body.style.backgroundColor = '#333';
frontFace.style.backgroundColor = '#666';
frontFace.style.top = '10px';
frontFace.style.left = '20px';

rearFace.style.backgroundColor = '#888';
rearFace.style.position = 'absolute';
rearFace.style.bottom = '30px';