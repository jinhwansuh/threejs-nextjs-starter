import { Suspense } from 'react';
import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { useControls } from 'leva';
import Loader from '../Loader/Loader';
import Plane from '../Plane/Plane';

export default function CanvasViewer() {
  const { physics } = useControls('Physics debug', {
    physics: true,
  });

  return (
    <Canvas
      camera={{
        fov: 50,
        near: 0.1,
        far: 2000,
        position: [6, 5, 20],
      }}
      shadows
    >
      <Suspense fallback={<Loader />}>
        <directionalLight
          color={'white'}
          position={[15, 15, 10]}
          intensity={5}
        />
        <OrbitControls
          minDistance={5}
          maxDistance={15}
          enablePan={true}
          minPolarAngle={-Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <Physics debug={physics}>
          <RigidBody>
            <mesh position={[0, 2, 0]}>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color={'purple'} />
            </mesh>
          </RigidBody>

          <Plane />
        </Physics>

        <Preload all />
      </Suspense>
    </Canvas>
  );
}
