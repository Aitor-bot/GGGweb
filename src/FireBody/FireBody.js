import React from 'react';
import Particles from 'react-tsparticles';
import { loadFirePreset } from 'tsparticles-preset-fire';

function FireBody() {
  const particlesInit = (instance) => {
    loadFirePreset(instance);
  };

  return (
      <Particles
        init={particlesInit}
        options={{
          preset: 'fire',
          fullScreen: {
            zIndex: -1,
          },
        }}
      />

  );
}


export default FireBody;
