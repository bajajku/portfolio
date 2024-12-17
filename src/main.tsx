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

  galaxy.rotation.y += 0.002;
  galaxy.rotation.x += 0.002;
  light.intensity = 1 + 0.5 * Math.sin(Date.now() * 0.002);

  controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;

  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;

}

document.body.onscroll = moveCamera;
document.addEventListener('resize', onWindowResize);

animate();

const navToggle = document.querySelector(".mobile-nav-toggle");
const navMenu = document.querySelector("#primary-navigation");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        if (navMenu) {
            const visible = navMenu.getAttribute("data-visible");
            if (visible === "false") {
                navMenu.setAttribute("data-visible", "true");
                navToggle.setAttribute("aria-expanded", "true");
            } else {
                navMenu.setAttribute("data-visible", "false");
                navToggle.setAttribute("aria-expanded", "false");
            }
        }
    });
}
