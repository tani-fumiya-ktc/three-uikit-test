import {Canvas } from '@react-three/fiber'
import{Fullscreen, Container} from '@react-three/uikit'

function App() {

  return (
    <Canvas>
      <Fullscreen>
        <Container flexGrow={1} opacity={0.5} hover={{ opacity: 1 }} backgroundColor="red" />
      </Fullscreen>
    </Canvas>
    
  )
}

export default App
