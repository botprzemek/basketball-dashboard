<script setup lang="ts">
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(4000, 4000)
document.body.appendChild(renderer.domElement)

const loader = new GLTFLoader()
let loaded = false
let model: THREE.Object3D<THREE.Event>

loader.load(
	'/models/ball/scene.gltf',
	(file) => {
		model = file.scene
		scene.add(model)

		loaded = true
	},
	undefined,
	(error) => {
		console.error(error)
	}
)

camera.position.z = 2

const animate = () => {
	// if (loaded) model.rotateY(0.2)

	renderer.render(scene, camera)

	requestAnimationFrame(animate)
}

animate()
</script>

<!--<script setup lang="ts">-->
<!--import * as THREE from 'three'-->
<!--import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'-->
<!--import SplineLoader from '@splinetool/loader'-->
<!--import {useWindowSize} from '@vueuse/core'-->

<!--const { width, height } = useWindowSize()-->
<!--const camera = new THREE.OrthographicCamera(width.value / - 2, width.value / 2, height.value / 2, height.value / - 2,  -100000, 100000)-->
<!--const scene = new THREE.Scene()-->
<!--const loader = new SplineLoader()-->
<!--const renderer = new THREE.WebGLRenderer({ antialias: true })-->

<!--camera.position.set(-3662.89, 2379.99, 3678.25)-->
<!--camera.quaternion.setFromEuler(new THREE.Euler(-0.54, -0.71, -0.37))-->

<!--loader.load(-->
<!--    'https://prod.spline.design/w9aY4uvpTr63o607/scene.splinecode',-->
<!--    (splineScene) => scene.add(splineScene)-->
<!--)-->

<!--renderer.setSize(width.value, height.value)-->
<!--renderer.setAnimationLoop(animate)-->
<!--document.body.appendChild(renderer.domElement)-->

<!--renderer.shadowMap.enabled = true-->
<!--renderer.shadowMap.type = THREE.PCFShadowMap-->

<!--scene.background = new THREE.Color('#e698a8')-->
<!--renderer.setClearAlpha(1)-->

<!--const controls = new OrbitControls(camera, renderer.domElement)-->
<!--controls.enableDamping = true-->
<!--controls.dampingFactor = 0.125-->

<!--window.addEventListener('resize', onWindowResize)-->

<!--function onWindowResize() {-->
<!--  camera.left = width.value / - 2-->
<!--  camera.right = width.value / 2-->
<!--  camera.top = height.value / 2-->
<!--  camera.bottom = height.value / - 2-->
<!--  camera.updateProjectionMatrix()-->
<!--  renderer.setSize(width.value, height.value)-->
<!--}-->

<!--function animate() {-->
<!--  controls.update()-->
<!--  renderer.render(scene, camera)-->
<!--}-->
<!--</script>-->

<template>
	<div class="w-screen h-screen">
		<canvas class="w-full h-full" />
	</div>
</template>
