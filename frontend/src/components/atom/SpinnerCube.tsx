"use client"

import React, { useEffect, useState, useReducer, useRef } from 'react';
import {
    Mesh,
    Scene,
    BoxGeometry,
    WebGLRenderer,
    PerspectiveCamera,
    MeshNormalMaterial,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(55, 400 / 400, 0.1, 10);
const renderer = new WebGLRenderer({ alpha: true });
renderer.setSize(400, 400);
// Add a cube //
const geometry = new BoxGeometry(1,1,1);
const material = new MeshNormalMaterial();
const cube = new Mesh(geometry, material);
scene.add(cube);
camera.position.z = 2;

type State = { isAnimating: boolean; };
type Action = { type: "START_ANIMATION" } | { type: "STOP_ANIMATION" };
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "START_ANIMATION": return { isAnimating: true };
        case "STOP_ANIMATION": return { isAnimating: false };
        default: return state;
    }
};

const SpinnerCube: React.FC = () => {

    const mountRef = useRef<HTMLDivElement>(null);
    const [state, dispatch] = useReducer(reducer, { isAnimating: true });
    const [isDragging, setIsDragging] = useState(false);
    const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const [auto, setAuto] = useState<boolean>(true);
    const [screen, setScreen] = useState<{width:number,height:number}>({
        width: window.screen.width, 
        height: window.screen.height
    });
    const [orientation, setOrientation] = useState<"portrait" | "landscape">(
        window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape"
    );

    const handleAnimate = () => {
        dispatch({type: auto ? "STOP_ANIMATION":"START_ANIMATION"})
        setAuto(!auto);
    }

    useEffect(() => {
        if (mountRef.current && !mountRef.current.hasChildNodes()) {
            mountRef.current.appendChild(renderer.domElement);
        }
        let animationFrameId: number;
        const animate = () => {
            if (state.isAnimating) {
                cube.rotation.x += 0.0025;
                cube.rotation.y += 0.0025;
            }
            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animationFrameId);
    },[state.isAnimating]);

   useEffect(() => {
        const handleChange = () => {
            setOrientation(window.innerWidth > window.innerHeight ? "landscape" : "portrait");

            setScreen({
                width: mountRef.current?.clientWidth ?? window.innerWidth,
                height: mountRef.current?.clientHeight ?? window.innerHeight
            });
        };

        handleChange(); // เรียกครั้งแรกหลัง mount

        window.addEventListener("resize", handleChange);
        return () => window.removeEventListener("resize", handleChange);
    }, []);


    useEffect(() => {
        const handleResize = () => {
            camera.aspect = 1;
            camera.updateProjectionMatrix();
            console.log('spinner column width ',mountRef.current?.clientWidth )
            if(orientation == 'portrait' && screen.width <= 430){
                renderer.setSize(mountRef.current?.clientWidth || screen.width, mountRef.current?.clientWidth || screen.width);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(()=>{
        const handleMouseDown = (event: MouseEvent) => {
            setIsDragging(true);
            lastMousePos.current = { x: event.clientX, y: event.clientY };
            dispatch({ type: "STOP_ANIMATION" });
        };
    
        const handleMouseMove = (event: MouseEvent) => {
            if (!isDragging) return;
            const deltaX = event.clientX - lastMousePos.current.x;
            const deltaY = event.clientY - lastMousePos.current.y;
            cube.rotation.y += deltaX * 0.005;
            cube.rotation.x += deltaY * 0.005;
            lastMousePos.current = { x: event.clientX, y: event.clientY };
        };
        const handleMouseUp = () => {
            setIsDragging(false);
            if(auto) dispatch({ type: "START_ANIMATION" });
        };
        if (mountRef.current) {
            mountRef.current.addEventListener("mousedown", handleMouseDown);
            mountRef.current.addEventListener("mouseup", handleMouseUp);
            mountRef.current.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            if (mountRef.current) {
                mountRef.current.removeEventListener("mousedown", handleMouseDown);
                mountRef.current.removeEventListener("mouseup", handleMouseUp);
                mountRef.current.removeEventListener("mousemove", handleMouseMove);
            }
        };
    },[isDragging,auto])

    return <div>
        <div className="spinnerCube" ref={mountRef} />
        <div className="flex items-center justify-center mt-10">
            <label className="cursor-pointer checkbox">
                <input type="checkbox" className="sr-only peer" checked={auto} onChange={handleAnimate}/>
                <div className="relative w-16 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[200%] rtl:peer-checked:after:translate-x-[200%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:inset-s-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500 dark:peer-checked:bg-emerald-500 peer-checked:text-gray-100 text-gray-700">
                    <span className="h-full ps-1.75 text-sm flex items-center">auto</span>
                </div>
                {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Auto Rotation</span> */}
            </label>
        </div>
    </div>
};

export default SpinnerCube;