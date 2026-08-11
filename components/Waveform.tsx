const BARS = [
  8, 14, 22, 12, 30, 18, 26, 10, 34, 20, 14, 28, 16, 24, 9, 32, 18, 12, 26, 15,
];

export default function Waveform({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${BARS.length * 6} 40`}
      className={className}
      aria-hidden="true"
    >
      {BARS.map((h, i) => (
        <rect
          key={i}
          x={i * 6}
          y={20 - h / 2}
          width="3"
          height={h}
          rx="1.5"
          fill={color}
        />
      ))}
    </svg>
  );
}
