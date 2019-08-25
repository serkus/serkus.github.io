window.onload = function(){
//open("http://yandex.ru");
var width = window.innerWidth;
var height = window.innerHeight;
var cube ={
	rotationX:0,
	rotationY:0,
	rotationZ:0
};

var canvas =  document.getElementById('canvas');
canvas.setAttribute('width', width);
canvas.setAttribute('height', height);
var reneder = new THREE.WebGLRenderer({canvas: canvas});
reneder.setClearColor(0x000000);
var scena =  new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
camera.position.set(0, 0, 1000);
var light = new  THREE.AmbientLight(0xffffff);
scena.add(light);
var geometry = new THREE.BoxGeometry(500, 500, 500,10000,10000,10000);
var matealy = new THREE.MeshBasicMaterial({color: 0x00FF00, wireframe: true});
var mash = new THREE.Mesh(geometry, matealy);
scena.add(mash);

var gui = new dat.GUI(); 
gui.add(cube, 'rotationX').min(-0.2).max(0.2).step(0.01);
gui.add(cube, 'rotationY').min(-0.2).max(0.2).step(0.01);
gui.add(cube, 'rotationZ').min(-0.2).max(0.2).step(0.01);

function loop(){
reneder.setClearColor(0x000000);
mash.rotation.x += cube.rotationX;
mash.rotation.y += cube.rotationY;
mash.rotation.z += cube.rotationZ;

reneder.render(scena, camera);
requestAnimationFrame(function(){loop();});
}
loop();
}
