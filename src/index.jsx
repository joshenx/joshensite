import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <Suspense fallback={null}>
        <Canvas
            style={{
                position: "fixed"
            }}
            gl={{ toneMappingExposure: 0.7 }}
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 1000,
                position: [ -2, 1.5, 7 ]
            } }
        >
            <Experience />
        </Canvas>
    </Suspense>
    <div className="welcome-text">Welcome. Click the car to get a better view.</div>
    </>
)