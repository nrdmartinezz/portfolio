interface SectionLabelProps {
  index: string;
  children: React.ReactNode;
}

export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span className="section-label__rule" />
      <p>{children}</p>
    </div>
  );
}
