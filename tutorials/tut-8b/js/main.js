// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

let sceneContainer = document.querySelector("#scene-container");
let model;
let mixer;


let actionPant, actionTail;
//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x015220);

const camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth /sceneContainer.clientHeight, 0.1, 1000);
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(1,1,5);
scene.add(light);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
sceneContainer.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry ( 0.5, 32, 16 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const texture = new THREE.TextureLoader().load('textures/ice.jpg');
const material = new THREE.MeshBasicMaterial( { map:texture } );
const ball = new THREE.Mesh( geometry, material );
scene.add( ball );

camera.position.z = 5;

const clock = new THREE.Clock();

function animate () {
    requestAnimationFrame(animate);

    if (mixer) mixer.update(clock.getDelta());

    ball.rotation.x = Math.sin(Date.now()/ 50);   
    ball.rotation.y = Math.sin(Date.now()/ 200);   
    ball.rotation.z = Math.sin(Date.now()/ 500);   

    if (model) {
        model.rotation.y = Math.sin(Date.now()/ 200); 
    }

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
}




// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader(); // to load 3d models


loader.load('assets/dog_shiny.gltf', function (gltf) {
    model = gltf.scene;
    scene.add(model);
    model.scale.set(2,2,2);
    model.position.y = -1.5

mixer = new THREE.AnimationMixer(dog);
const clips = gltf.animations;
clipPant = THREE.AnimationClip.findByName(clips, 'pant');
actionPant = mixer.clipAction(clipPant);
//actionPant.play();

})


//Event Listeners
document.querySelector("body").addEventListener("mousedown", () => {
    actionPant.play();
    actionPant.paused = false;
    mouseIsDown = true;
})

document.querySelector("body").addEventListener("mousemove", () => {
    //actionPant.stop();
    actionPant.paused = true;
})

document.querySelector("body").addEventListener("mouseup", () => {
    if(mouseIsDown == true) {
        ball.rotation.x += 0.5;

    }
})

// ~~~~~~~~~~~~~~~~ Create scene here ~~~~~~~~~~~~~~~~
// →→→→→→ Follow next steps in tutorial: 
// // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

window.addEventListener('resize', onWindowResize, false);

animate();