import { Environment, Float, OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const ModelRenderer = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene, model.name]);

  return (
    <group scale={model.scale} rotation={model.rotation}>
      <primitive object={scene.scene} />
    </group>
  );
};

const TextureRenderer = ({ model }) => {
  const texture = useTexture(model.texturePath);
  const layerCount = model.depthLayers || 12;
  const depth = model.depth || 0.2;
  const layerStep = depth / layerCount;
  const layerIndexes = Array.from({ length: layerCount }, (_, index) => index);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
  }, [texture]);

  return (
    <group
      scale={model.scale || 1.3}
      rotation={model.rotation || [0, 0, 0]}
    >
      {layerIndexes.map((index) => (
        <mesh
          key={index}
          position={[0, 0, -depth / 2 + index * layerStep]}
          renderOrder={index}
        >
          <planeGeometry args={model.logoSize || [1, 1]} />
          <meshStandardMaterial
            map={texture}
            color={model.depthColor || "#1f2937"}
            transparent
            alphaTest={0.12}
            opacity={0.82}
            side={THREE.DoubleSide}
            roughness={0.35}
            metalness={0.2}
            depthWrite={false}
          />
        </mesh>
      ))}

      <mesh position={[0, 0, depth / 2 + 0.003]} renderOrder={layerCount + 1}>
        <planeGeometry args={model.logoSize || [1, 1]} />
        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.05}
          side={THREE.DoubleSide}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

const TechIconCardExperience = ({ model }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        {model.texturePath ? (
          <TextureRenderer model={model} />
        ) : (
          <ModelRenderer model={model} />
        )}
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
