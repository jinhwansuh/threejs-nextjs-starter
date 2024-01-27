import { RigidBody } from '@react-three/rapier';

export default function Plane() {
  return (
    <RigidBody
      type='fixed'
      rotation-x={Math.PI * -0.5}
      restitution={0}
      friction={4}
    >
      <mesh receiveShadow position={[0, 30, 0]}>
        <boxGeometry args={[50, 100, 1]} />
        <meshStandardMaterial color='#74b394' />
      </mesh>
    </RigidBody>
  );
}
