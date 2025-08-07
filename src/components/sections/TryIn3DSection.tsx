import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function GlassesModel() {
  const { scene } = useGLTF("/models/glasses-custom.glb");
  return <primitive object={scene} scale={1} />;
}

export const GlassesViewer = () => (
  <div className="w-full h-[500px] bg-gray-100 rounded-2xl shadow-inner cursor-grab">
    <Canvas camera={{ position: [-7, 3, 12], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <GlassesModel />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  </div>
);

const TryIn3DSection = () => (
  <section className="p-8 bg-white text-center">
    <h2 className="text-3xl font-bold mb-4">Explorá el Modelo en 3D</h2>
    <p className="text-gray-600 mb-6">
      Girá, acercá y descubrí cada detalle de nuestras gafas con esta
      experiencia interactiva.
    </p>
    <div className="max-w-4xl mx-auto">
      <GlassesViewer />
    </div>
  </section>
);

export default TryIn3DSection;
