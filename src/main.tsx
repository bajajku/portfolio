import { render } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);

// wrapping paper for geometry
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// add helper to scene
const gridHelper = new THREE.GridHelper(200, 50);
// add light to scene
const pointLight = new THREE.PointLight(0xffffff, 0.5);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(pointLight, ambientLight);
camera.position.z = 5;

scene.add(gridHelper, lightHelper);
// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}
animate();