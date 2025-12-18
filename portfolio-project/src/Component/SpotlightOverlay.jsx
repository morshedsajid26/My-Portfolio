import useMousePosition from "../hooks/useMousePosition";


export default function SpotlightOverlay() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        background: `
          radial-gradient(
            100px at ${x}px ${y}px,
            transparent 0%,
            rgba(0,0,0,0.4) 40%,
            rgba(0,0,0,0.85) 70%
          )
        `,
      }}
    />
  );
}
