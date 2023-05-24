import * as THREE from 'three'
import { OrbitControls, ContactShadows, MeshReflectorMaterial, PerformanceMonitor, Text, Float, Environment, Center } from '@react-three/drei'
import { Porsche } from './Porsche'
import { Lightformers } from './Lightformers'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

const LIGHT_HEIGHT = 2;

export default function Experience()
{
    // const { minDistance, maxDistance, minPolarAngle, maxPolarAngle } = useControls('Zoom Limits', {
    //     minDistance: { value: 6, min: 0, max: 15 },
    //     maxDistance: { value: 14, min: 0, max: 500 },
    //     minPolarAngle: { value: Math.PI/4, min: 0, max: Math.PI*2 },
    //     maxPolarAngle: { value: Math.PI/2, min: 0, max: Math.PI*2 },
    // })

    const eventHandler = (event) =>{
        setNewPointLightPos(new Vector3(event.point.x, LIGHT_HEIGHT, event.point.z));
        event.stopPropagation();
    }

    const [degraded, degrade] = useState(false);
    
    return <>    
        <Perf position="top-left" />    
        <color attach="background" />

        <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={4}
            maxDistance={9}
            minPolarAngle={Math.PI/4}
            maxPolarAngle={Math.PI/2}
            dampingFactor={0.03}
            enableDamping
            autoRotate
            autoRotateSpeed={-0.2}
        />

        {/* <fog attach="fog" color={fogColor} near={1} far={fogFar} /> */}
        
        {/* LIGHTS */}
        <ambientLight intensity={0.5} />
        <directionalLight
            castShadow
            intensity={2}
            position={[10, 6, 6]}
            shadow-mapSize={[512, 512]}
            shadow-normalBias={0.01}
        >
            <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight>

        {/* MESHES */}
        <mesh scale={2} position={[3, -0.95, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
            <ringGeometry args={[0.9, 1, 4, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
        <mesh scale={2} position={[-3, -0.95, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
            <ringGeometry args={[0.9, 1, 3, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
        <mesh position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={10}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#aaaaaa"
            metalness={1}
            roughness={0.7}
          />
        </mesh>
        
        <Center>
            <Porsche
                position={[-8, 0, -2]} scale={1} rotation-y={-Math.PI / 4}
                // rotation-x={ 0.13 }
            />
        </Center>
        
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
            <Lightformers />
        </Environment>
        <Float rotationIntensity={ 0.4 } position-y = { 1 } rotation-x ={ -0.3 } > 
            <Text
                font="./Inter-Bold.ttf"
                letterSpacing={ -0.1 }
                fontSize={ 1 }
                position={ [1, 1, -2 ] }
                maxWidth={ 3 }
            >
                JOSHEN
            </Text>
            <Text
                font="./Inter-Light.ttf"
                letterSpacing={ 0.2 }
                fontSize={ 0.4 }
                position={ [1, 0.3, -2 ] }
                maxWidth={ 1 }
            >
                PORTFOLIO
            </Text>
        </Float>
    </>
}

