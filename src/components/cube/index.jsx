import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader' 
import styles from './style.module.scss';

import { OrbitControls, RoundedBox} from '@react-three/drei';

export default function index () {
  return (
    <div className={styles.main}>

      <Canvas>
        <OrbitControls/>
        <ambientLight intensity={0}/>
        <directionalLight position={[2, 2, 2]}/>
        <Cube/>
      </Canvas>

    </div>
  )
}

function Cube() {

  const mesh = useRef(null);
  
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.2;
    mesh.current.rotation.z += delta * 0.0;
    })

  
  const t1 = new TextureLoader().load('../assets/t1.jpeg');
  const t2 = new TextureLoader().load('../assets/t2.jpeg');
  const t3 = new TextureLoader().load('../assets/t3.jpeg');
  const t4 = new TextureLoader().load('../assets/t4.jpeg');
  const t5 = new TextureLoader().load('../assets/about.jpg');
  const t6 = new TextureLoader().load('../assets/dotnet.png');
  
  return (
    <mesh ref={mesh}>
      <RoundedBox args={[0,4,4]}/>
      <boxGeometry args={[3, 3, 3]}/>
      <RoundedBox args={[4,4,0]}/>
      <meshStandardMaterial map={t1} attach="material-0"/>
      <meshStandardMaterial map={t2} attach="material-1"/>
      <meshStandardMaterial map={t3} attach="material-2"/>
      <meshStandardMaterial map={t4} attach="material-3"/>
      <meshStandardMaterial map={t5} attach="material-4"/>
      <meshStandardMaterial map={t6} attach="material-5"/>
    </mesh>
  )

}
