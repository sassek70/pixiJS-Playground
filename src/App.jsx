import { BlurFilter, TextStyle, ViewSystem } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';

const App = () =>
{
  // const PIXI = useApp()
  const blurFilter = useMemo(() => new BlurFilter(1), []);
  const textStyle = new TextStyle ({
    fontFamily: ['Helvetica', 'Arial', 'sans-serif'],
    fontSize: 36,
    fill: "red",
  })

  // ViewSystem.desiredScreenWidth(window.innerWidth / 2)
  // ViewSystem.desiredScreenHeight(window.innerHeight / 2)

  // let stageX = window.innerWidth
  // let stageY = window.innerHeight

  console.log(ViewSystem)

  return (
    <Stage>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
      />

      <Container x={400} y={330}>
        <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} style={textStyle} filters={[blurFilter]} /> 
      </Container>
    </Stage>
  );
};

export default App