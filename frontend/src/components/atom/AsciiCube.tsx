import React,{ useEffect } from "react";
import * as THREE from "three";

const AsciiCube:React.FC = () => {
    useEffect(()=>{
   
        // let lightMode = true
        // const clock = new THREE.Clock()
        // let rotateModel = false
        // var userUploaded = false
        // let controls

        // Creates empty mesh container
        // const myMesh = new THREE.Mesh();
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0, 0, 0);

        //Lights
        const pointLight1 = new THREE.PointLight(0xffffff, 1, 0, 0);
        pointLight1.position.set(100, 100, 400);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, .5);
        pointLight2.position.set(-500, 100, -400);
        scene.add(pointLight2);

        // Parameters
        // const stlLoader = new THREE.Loader()

        //Material
        const material = new THREE.MeshStandardMaterial()
        material.flatShading = true
        material.side = THREE.DoubleSide;

        // Sizes
        // const sizes = {
        //     width: window.innerWidth,
        //     height: window.innerHeight
        // }

        // Camera
        // const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2000);

        // Renderer
        // const renderer = new THREE.WebGLRenderer()

        // let effect;

        // let characters = ' .:-+*=%@#'
        // const effectSize = { amount: .205 }
        // let backgroundColor = 'black'
        // let ASCIIColor = 'white';
        // function createEffect() {
        //     effect = new AsciiEffect(renderer, characters, { invert: true, resolution: effectSize.amount });
        //     effect.setSize(sizes.width, sizes.height);
        //     effect.domElement.style.color = ASCIIColor;
        //     effect.domElement.style.backgroundColor = backgroundColor;
        // }
    },[])
    return (<div/>)

}

export default AsciiCube