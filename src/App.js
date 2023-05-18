import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PointerLockControls, KeyboardControls, Sky, Environment } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Effect from './components/Effect'
import Balls from './components/Balls'
import Ground from './components/Ground'
import Player from './components/Player'

export const App = () => (
  <KeyboardControls
    map={[
      { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
      { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
      { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
      { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
      { name: 'jump', keys: ['Space'] }
    ]}>
    <Canvas shadows camera={{ position: [-4.5, 0, 12], fov: 35 }}>
      <ambientLight intensity={1} />
      <color attach="background" args={['darkgreen']} />

      {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr" /> */}
      <group position={[0.5, -1.5, 0]}>
        <Balls />
      </group>
      {/* <Sky sunPosition={[0, 0, 0]} /> */}
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />
      </Physics>
      <Effect />
      <PointerLockControls />
    </Canvas>
  </KeyboardControls>
)
