type WaveDividerProps = {
  bgColor: string;
  fillColor: string;
  flip?: boolean;
};

export function WaveDivider({ bgColor, fillColor, flip = false }: WaveDividerProps) {
  return (
    <div
      className="w-full leading-[0] overflow-hidden block"
      style={{ backgroundColor: bgColor, transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        style={{ height: 60 }}
        aria-hidden
      >
        <path
          d="M0,30 C360,60 720,0 1080,30 C1260,45 1360,18 1440,30 L1440,60 L0,60 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
