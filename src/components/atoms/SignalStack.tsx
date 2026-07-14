interface SignalStackProps {
  horizontal?: boolean;
}

export function SignalStack({ horizontal = false }: SignalStackProps) {
  return (
    <span
      className={horizontal ? "signal-stack signal-stack--horizontal" : "signal-stack"}
      aria-hidden="true"
    >
      <i className="signal signal--yellow" />
      <i className="signal signal--red" />
      <i className="signal signal--blue" />
    </span>
  );
}
