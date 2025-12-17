import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: false,

        particles: {
          number: {
            value: 100,
            density: { enable: true, area: 900 },
          },
          color: { value: "#ffffff" },
          opacity: { value: 0.35 },
          size: { value: 2 },
          move: { enable: true, speed: 0.7 },
          links: {
            enable: true,
            distance: 140,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
        },

        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 160,
              duration: 0.5,
            },
          },
        },

        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ParticlesBg;
