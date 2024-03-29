// import * as THREE from 'three'
// import { OrbitControls, Html, SpotLight, Sparkles, PerformanceMonitor, Text, Float, Environment, Center } from '@react-three/drei'
// import { Porsche } from './Porsche'
// import { Lightformers } from './Lightformers'
// import { useState, useRef } from 'react'
// import { useFrame, useThree } from '@react-three/fiber'
// import { Vector3 } from 'three'
// import { useControls } from 'leva'
// import { Perf } from 'r3f-perf'

// const LIGHT_HEIGHT = 2;

// export default function Experience()
// {
//     // const { minDistance, maxDistance, minPolarAngle, maxPolarAngle } = useControls('Zoom Limits', {
//     //     minDistance: { value: 6, min: 0, max: 15 },
//     //     maxDistance: { value: 14, min: 0, max: 500 },
//     //     minPolarAngle: { value: Math.PI/4, min: 0, max: Math.PI*2 },
//     //     maxPolarAngle: { value: Math.PI/2, min: 0, max: Math.PI*2 },
//     // })
//     const eventHandler = (event) =>{
//         setNewPointLightPos(new Vector3(event.point.x, LIGHT_HEIGHT, event.point.z));
//         event.stopPropagation();
//     }

//     const [degraded, degrade] = useState(false);
//     const links = ["DESIGN", "MUSIC", "RESUME"];

//     return <>
//         <Perf position="bottom-left" />
//         <color attach="background" />

//         <OrbitControls
//             enablePan={false}
//             enableZoom={true}
//             minDistance={6}
//             maxDistance={15}
//             minPolarAngle={Math.PI/3}
//             maxPolarAngle={Math.PI/2}
//             dampingFactor={0.03}
//             enableDamping
//         />

//         {/* <fog attach="fog" color={fogColor} near={1} far={fogFar} /> */}

//         {/* LIGHTS */}
//         <MovingSpot color="#ffffff" position={[-3, 5, 1]} />
//         <MovingSpot color="#ffffff" position={[5, 5, 0]} />

//         <ambientLight intensity={0.5} />
//         <directionalLight
//             intensity={2}
//             position={[10, 6, 6]}
//         >
//             <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
//         </directionalLight>

//         <Sparkles
//             count={300}
//             speed={0.3}
//             size={3}
//             opacity={0.5}
//             position-y={4}
//             scale={[15, 10, 15]}
//         />
//         {/* MESHES */}
//         <mesh scale={2} position={[3, -0.95, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
//             <ringGeometry args={[0.9, 1, 4, 1]} />
//             <meshStandardMaterial color="white" roughness={0.75} />
//         </mesh>
//         <mesh scale={2} position={[-3, -0.95, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
//             <ringGeometry args={[0.9, 1, 3, 1]} />
//             <meshStandardMaterial color="white" roughness={0.75} />
//         </mesh>

//         <Center>
//             <Porsche
//                 position={[-8, 0, -2]} scale={1} rotation-y={-Math.PI / 4}
//                 // rotation-x={ 0.13 }
//             />
//         </Center>

//         <PerformanceMonitor onDecline={() => degrade(true)} />
//         <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
//             <Lightformers />
//         </Environment>
//         <Float rotationIntensity={ 0.4 } position-y = { 1 } rotation-x ={ -0.3 } >
//             <Text
//                 font="./Inter-Bold.ttf"
//                 letterSpacing={ -0.1 }
//                 fontSize={ 1 }
//                 position={ [1, 1, -2 ] }
//                 maxWidth={ 3 }
//             >
//                 JOSHEN
//             </Text>
//             <Text
//                 font="./Inter-Light.ttf"
//                 letterSpacing={ 0.2 }
//                 fontSize={ 0.4 }
//                 position={ [1, 0.3, -2 ] }
//                 maxWidth={ 1 }
//             >
//                 PORTFOLIO
//             </Text>
//         </Float>
//         <Float rotationIntensity={ 0.4 } position = { [-2.5, 2, -1.5] } rotation= { [-0.3, 0.6, 0.2] } >
//         {[...Array(links.length).keys()].map((index) => {
//             return(
//             <Annotation key={index} position-y={index*(-0.8)}>
//                 {links[index]}
//             </Annotation>);
//         })}
//         </Float>
//     </>
// }

// function MovingSpot({ vec = new Vector3(), ...props }) {
//     const light = useRef()
//     const viewport = useThree((state) => state.viewport)
//     useFrame((state) => {
//       light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
//       light.current.target.updateMatrixWorld()
//     })
//     return <SpotLight castShadow ref={light} penumbra={1} distance={15} angle={0.35} attenuation={6} anglePower={4} intensity={4} {...props} />
// }

// function Annotation({ children, ...props }) {
//     return (
//       <Html
//         {...props}
//         transform
//         occlude="blending">
//         <button onClick={() => {console.log(children)}} className="annotation">{children}</button>
//       </Html>
//     )
// }

/*
  Auto-generated by Spline
*/
/*
  Auto-generated by Spline
*/
/*
  Auto-generated by Spline
*/
/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";
import Spline from "@splinetool/react-spline";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

export default function Experience({ ...props }) {
  return (
    <Spline scene="https://prod.spline.design/BQ8Xe7yObEeaN50O/scene.splinecode" />
  );
}
