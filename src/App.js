import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Interface from "./components/Interface";
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
      </Canvas>

      <Interface />
    </>
  );
}

export default App;
