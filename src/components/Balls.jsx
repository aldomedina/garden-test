import { Edges, Caustics } from '@react-three/drei'
import { Vector3 } from 'three'

const w = 400
const h = 400
const scale = 55
const rows = h / scale
const cols = w / scale
const Y = 35
const ballScale = 20
const createBalls = () => {
  const balls = []
  for (let x = 0; x <= cols; x++) {
    for (let z = 0; z <= rows; z++) {
      balls.push({ position: [x * scale - w / 2, Y, z * scale - w / 2], scale: ballScale })
    }
  }
  return balls
}

export default function Balls() {
  const balls = createBalls()
  console.log(balls)
  return (
    <Caustics color="hotpink" lightSource={[5, 5, -10]} worldRadius={0.6} ior={1.2} intensity={0.2}>
      {balls.map(({ position, scale }, i) => (
        <mesh key={`ball-${i}`} cale={scale * 0.95} position={position}>
          <sphereGeometry />
          <meshBasicMaterial transparent opacity={0} />
          <Edges scale={scale} threshold={11.2}>
            <lineBasicMaterial color={[20, 0.5, 20]} toneMapped={false} />
          </Edges>
        </mesh>
      ))}
    </Caustics>
  )
}
