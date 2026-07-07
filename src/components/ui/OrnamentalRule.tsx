type OrnamentalRuleProps = {
  width?: number;
  className?: string;
};

export function OrnamentalRule({ width = 240, className = "" }: OrnamentalRuleProps) {
  return (
    <svg
      width={width}
      height={14}
      viewBox="0 0 240 14"
      className={className}
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="7"
        x2="105"
        y2="7"
        stroke="var(--color-brass)"
        strokeWidth="0.75"
      />
      <polygon points="120,3 116,7 120,11 124,7" fill="var(--color-brass)" />
      <line
        x1="135"
        y1="7"
        x2="240"
        y2="7"
        stroke="var(--color-brass)"
        strokeWidth="0.75"
      />
    </svg>
  );
}
