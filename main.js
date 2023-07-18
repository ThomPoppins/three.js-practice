import * as THREE from 'three';

// initialize a new scene
const scene = new THREE.Scene();

// Select and initialize the PerspectiveCamera to be the camera
// params: 1. "field of view" 2. "aspect ratio" 3. "near" 4. "far"
// "field of view" is the perspective (Dutch: "gezichtsveld") it is the extend (Dutch: omvang)
// of the scene on the display (Dutch: scherm). Value is in degrees.
// "near" and "far" are values where you decide the distance objects have
// to be between to be rendered. It has to be between these 2 values
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Initialize the renderer.
// Definition of "renderer": To use the processing power of computer hardware and software
// to synthesize (the components of an image or animation) in a final graphic output. 
// And so a renderer would be something that does that.
const renderer = new THREE.WebGLRenderer();
// Configure the size of the to be rendered image/animation
// You can use calculations to set a smaller value for example: 
// renderer.setSize("window.innerWidth/2, window.innerHeight/2)"
renderer.setSize(window.innerWidth, window.innerHeight);

// Add (or append) child DOM element (<canvas>) at the bottom in the document body.
document.body.appendChild(renderer.domElement);

// To create a cube, we need a BoxGeometry. This is an object that contains all
// "vertices" (Dutch: hoeken en/of punten) and "faces" (Dutch: vlakken) of the cube.
//
// Wikipedia: "Geometry is a branch of mathematics concerned with properties of space such as the distance,
// shape, size, and relative position of figures."
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Initilize the material configuration with MeshBasicMaterial and set the color to 0x00ff00
// by passing a object with the "color" key. 0x00ff00 is a green color.
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// Initialize the cube by use of the "Mesh" object. 
//
// "Mesh" takes a geometry and applies a material to it, creating a cube in the process.
const cube = new THREE.Mesh(geometry, material);
// The cube will be added to the scene at position with coordinates: (0,0,0)
scene.add(cube);

// Because the camera was also on position with coordinates (0,0,0),
// we change it's position to a different location so we can see the cube. 
camera.position.z = 5;

// function animate will loop every time the screen is refreshed, by using the function itself 
// "animate()" as parameter for "requestAnimationFrame". When a user navigates to a different 
// tab it will pause and not waste processing power and battery life. 
function animate() {
  requestAnimationFrame(animate);

  // Add a rotation effect to the cube object.
  cube.rotation.x += 0.07;
  cube.rotation.y += 0.03;

  // render the animation with params "scene" and "camera"
  renderer.render(scene, camera);
}
animate();
