import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        gl={{ toneMappingExposure: 0.7 }}
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [ -3, 1.5, 4 ]
        } }
    >
        <Experience />
    </Canvas>
)