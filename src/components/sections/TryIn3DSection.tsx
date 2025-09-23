import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { ChevronRight, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "../ui/separator";

export function GlassesModel() {
  const { scene } = useGLTF("/models/glasses-custom.glb");
  return <primitive object={scene} scale={1.3} />;
}
// opcional: precarga del modelo
useGLTF.preload?.("/models/glasses-custom.glb");

function ViewerSkeleton() {
  return (
    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 animate-pulse" />
  );
}

export const GlassesViewer = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-2xl shadow-inner cursor-grab max-sm:max-h-96 max-sm:min-h-0">
    <Canvas camera={{ position: [-7, 3, 12], fov: 60 }} className="max-sm:max-h-96 max-sm:min-h-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <GlassesModel />
        <Environment preset="city" />
      </Suspense>

      {/* Controles limitados para evitar ángulos incómodos */}
      <OrbitControls
        enableZoom
        enablePan={false}
        minDistance={6}
        maxDistance={18}
        maxPolarAngle={Math.PI * 0.6}
        minPolarAngle={Math.PI * 0.2}
      />
    </Canvas>

    {/* Fallback visual mientras carga el modelo (por si el Suspense tarda un frame) */}
    <Suspense fallback={<ViewerSkeleton />}></Suspense>
  </div>
);

const TryIn3DSection = () => (
  <section className="p-8 md:px-40 bg-white text-center" id="try-in-3d">
    <h2 className="text-3xl font-bold mb-4">Explorá nuestro catálogo en 3D</h2>
    <p className="text-gray-600 mb-6">
      Girá, acercá y descubrí cada detalle de nuestras gafas con esta
      experiencia interactiva.
    </p>
    <div className="mx-auto flex flex-col lg:flex-row gap-8 items-stretch text-left">
      <div className="flex-3 min-h-[500px] md:min-h-0 max-sm:max-h-96 max-sm:min-h-0">
        <GlassesViewer />
      </div>
      <Card className="flex-2 p-0 bg-gradient-to-br from-[#FFFFFF] to-gray-50">
        <CardContent className="p-6 space-y-4 h-full flex flex-col">
          <div className="flex items-center gap-2">
            <Badge variant="outline">Nuevo</Badge>
            <h3 className="text-2xl font-semibold">Ray-Ban RB7046</h3>
          </div>

            <Separator />

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Estilo moderno con el sello de calidad de Ray-Ban. Un diseño versátil para quienes
              buscan comodidad sin perder elegancia.
            </p>

            <ul className="space-y-2.5 sm:space-y-3">
              {[
                "Material del marco: Acetato transparente",
                "Varillas: Carey oscuro",
                "Forma: Rectangular ligeramente redondeada",
                "Ajuste cómodo con puente moldeado",
                "Ideal para lentes recetados o con filtro de luz azul",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-700">
                  <ChevronRight className="text-brand mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-2 pt-1">
              <BadgeCheck className="text-green-600 h-5 w-5 mt-0.5 shrink-0" />
              <span className="text-xs sm:text-sm text-gray-500">
                Garantía oficial de fábrica incluida
              </span>
            </div>

            <Separator className="!mt-4 sm:!mt-6" />

            <Button className="w-full bg-brand hover:!bg-[#dd3a45] text-sm sm:text-base py-5 sm:py-6 cursor-pointer">
              Ver más detalles
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default TryIn3DSection;
