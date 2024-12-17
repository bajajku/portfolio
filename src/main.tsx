import { render } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg') as HTMLCanvasElement,
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 0, 20);

const controls = new OrbitControls(camera, renderer.domElement);

// Galaxy Particles
const galaxyGeometry = new THREE.BufferGeometry();
const count = 1000;
const positions = [];

for (let i = 0; i < count; i++) {
  const x = THREE.MathUtils.randFloatSpread(100);
  const y = THREE.MathUtils.randFloatSpread(100);
  const z = THREE.MathUtils.randFloatSpread(100);
  positions.push(x, y, z);
}

galaxyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

const galaxyMaterial = new THREE.PointsMaterial({
  size: 0.2,
  color: 0x00ffff,
  transparent: true,
});

const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
scene.add(galaxy);

// Mysterious Light at the Center
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 0);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);

  galaxy.rotation.y += 0.001;
  galaxy.rotation.x += 0.001;

  controls.update();
  renderer.render(scene, camera);
}

animate();
