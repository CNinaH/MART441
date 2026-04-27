import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x243861);


const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshStandardMaterial({ 
        color: 0x80203d,
        wireframe: true })
    
);
cube.position.y = -6;
scene.add(cube);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 32, 32),
    new THREE.MeshStandardMaterial({
        color: 0x513ec0,
      
    })
);
sphere.position.x = 6;
scene.add(sphere);

const loader = new GLTFLoader();
let loadedModel;

loader.load(
    './assets/hourglass.glb',

    function (gltf) {
        loadedModel = gltf.scene;

        loadedModel.scale.set(5, 5, 5);
        loadedModel.position.set(0, -5, 0);

        scene.add(loadedModel);

        console.log("MODEL LOADED:", loadedModel);
    },

    undefined,

    function (error) {
        console.error("LOAD ERROR:", error);
    }
);;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.position.x = Math.sin(Date.now() * 0.003) * 2;
   
    sphere.rotation.x += 0.03;
    sphere.position.y = Math.sin(Date.now() * 0.003) * 2;
   
    if (loadedModel) {
        loadedModel.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});