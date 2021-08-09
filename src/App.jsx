// import ReactDOM from 'react-dom'
import React, { useState } from 'react'
// import React, { useRef, useState, useEffect } from 'react'
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
// import * as THREE from "three"
import './App.scss'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Works from './components/Works'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
// import { Menu } from '@material-ui/core'
import Menu from './components/MenuList' 
// const CameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(
//     () => {
//       const controls = new OrbitControls(camera, gl.domElement);

//       controls.minDistance = 3;
//       controls.maxDistance = 20;
//       return () => {
//         controls.dispose();
//       };
//     },
//     [camera, gl]
//   );
//   return null;
// };

// function Box(props) {
//   // This reference will give us direct access to the THREE.Mesh object
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame(() => {
//     mesh.current.rotation.x = mesh.current.rotation.y += 0.01
//   })
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

export default function App() {

  

  // const [munuName, setMenuname] = useState(state)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='app'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className='section'>
        <Intro></Intro>
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact></Contact>
      </div>
      {/* <Canvas gl={{antialias: true}} dpr={Math.max(window.devicePixelRatio, 2)}>
      <CameraController />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas> */}
    </div>
   
  )
}
