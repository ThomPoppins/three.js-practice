import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

/* Version v0.0.4: */

// Set up renderer
const renderer = new THREE.WebGLRenderer();
// set animation size, size is same of the ful window height and width
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(15, 30, 50);
camera.lookAt(0, 0, 0);

// Set up scene
const scene = new THREE.Scene();

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

/**
 * Now we need a geometry with "vertices" (Dutch: hoekpunten)
 * The line will be drawn between every consecutive (Dutch: opeenvolgend) pair of vertices (Dutch: hoekpunten).
 * 
 * Vector3() has 3 parameters x,y and z. This Vector3 object can be used to represent a lot of things. 
 * A point in 3D space, of a direction (straight-line distance) or just any arbitrary (Dutch: willekeurig) triplet
 * of numbers.
 * 
 * Vector defenition: "A quantity having direction as well as magnitude, especially as determining the position
 * of one point in space relative to another."
 * Dutch: Vector definitie: "Een grootheid die zowel richting als grootte heeft, vooral als 
 * het bepalen van de positie van het ene punt in de ruimte ten opzichte van het andere."
 */
const points = [];
points.push(new THREE.Vector3(-10, 0, 0))
points.push(new THREE.Vector3(0, 10, 0))
points.push(new THREE.Vector3(10, 0, 0))
points.push(new THREE.Vector3(-5, -5, 0))
points.push(new THREE.Vector3(-10, 0, 0))


/**
 * Initialize geometry with BufferGeometry, this geometry is only made up from vertices.
 * BufferGeometry makes something from the Vector3() points, after BufferGeometry the declared 
 * Vector3() objects really mean something, now the points are configurations for geometry.
 */
const geometry = new THREE.BufferGeometry().setFromPoints(points);

/**
 * Form a line from the geometry vertices (Dutch: hoekpunten) with the Line() object.
 * Line almost works the same as Mesh, but only connecting the vertices together.
 */
const line = new THREE.Line(geometry, material);

// add line to scene
scene.add(line);

// check WebGL compatibility
if (WebGL.isWebGLAvailable()) {
  renderer.render(scene, camera);
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('web_gl_error').appendChild(warning);
}
