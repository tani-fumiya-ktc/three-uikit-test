import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Container, Text } from "@react-three/uikit";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerIcon,
} from "@react-three/uikit-default";

function AccordionDemo() {
  return (
    <Container flexDirection="column" width={300}>
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Text>Is it accessible?</Text>
            <AccordionTriggerIcon />
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <Text>Is it styled?</Text>
            <AccordionTriggerIcon />
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              Yes. It comes with default styles that matches the other components&apos; aesthetic.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <Text>Is it animated?</Text>
            <AccordionTriggerIcon />
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It&apos;s animated by default, but you can disable it if you prefer.</Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

function App() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0, touchAction: "none" }}
      gl={{ localClippingEnabled: true }}
    >
      <OrbitControls />
      <Container backgroundColor="red" sizeX={8} sizeY={4} flexDirection="row">
        <Container flexGrow={1} margin={32} backgroundColor="green" />
        <Container flexGrow={1} margin={32} backgroundColor="blue" />
      </Container>
      <AccordionDemo />
    </Canvas>
  );
}

export default App;
