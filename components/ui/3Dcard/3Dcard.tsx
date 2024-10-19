import * as THREE from "three";
import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber/native";
import { Environment, Float, useGLTF } from "@react-three/drei/native";
import tarotCard from "../../../public/assets/models/tarotcard.glb";
import React from "react";

function Model(props: any) {
  const modelRef = useRef<THREE.Mesh | null>(null);
  const gltf = useGLTF(tarotCard);

  return (
    <primitive
      ref={modelRef}
      scale={[0.4, 0.4, 0.4]}
      rotation={[0, 2.99, 0]}
      {...props}
      object={gltf.scene}
    />
  );
}

export default function Arcana() {
  return (
    <Canvas className="w-full">
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="warehouse" />
      <Suspense>
        <Float 
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.6, 0.9]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Model />
        </Float>
      </Suspense>
    </Canvas>
  );
}
