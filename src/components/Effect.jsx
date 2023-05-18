import React from 'react'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const Effect = () => {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={1} intensity={5} levels={9} mipmapBlur />
    </EffectComposer>
  )
}

export default Effect
