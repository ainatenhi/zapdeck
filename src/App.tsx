// components

import { Canvas } from '@components/Canvas';
import { Container } from '@components/Container';

export const App = () => {
  return (
    <div className="app">
      <section className="canvas-section">
        <Container>
          <Canvas />
        </Container>
      </section>
    </div>
  );
};
