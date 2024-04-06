import {Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';
import { color } from 'three/examples/jsm/nodes/Nodes.js';

const Computers = (isMobile) => {
  const computers=useGLTF('./books/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={1}
      groundColor="black"/>
      <pointLight intensity={14}/>
      <spotLight
      position={[-20,40,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
 
      <primitive object={computers.scene}
      scale={isMobile?0.003:0.002}
      position={isMobile?[0,-3,-2.2]:[0,-3.75,-1.5]}
      rotation={[0.04,1.5,0]}
      />
      </mesh>
  )
}

const ComputersCanvas=()=>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 500px)");

  setIsMobile(mediaQuery.matches);

  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  };

  mediaQuery.addEventListener("change", handleMediaQueryChange);


  return () => {
    mediaQuery.removeEventListener("change", handleMediaQueryChange);
  };
}, []);

  return (
    <Canvas frameloop="demand" shadows
    camera={{position:[20,5,5],fov: 25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
      <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
      
    </Canvas>
  )
}

export default ComputersCanvas;