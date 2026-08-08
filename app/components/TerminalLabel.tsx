interface TerminalLabelProps {
  children: React.ReactNode;
  className?: string;
  caret?: boolean;
}

/**
 * A command-line style section label: `> label --flag`
 * The recurring signature motif across the whole site.
 */
export default function TerminalLabel({ children, className = '', caret = false }: TerminalLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs md:text-sm tracking-wide text-muted ${className}`}
    >
      <span className="text-accent select-none" aria-hidden>
        &gt;
      </span>
      <span className="uppercase tracking-widest">{children}</span>
      {caret && (
        <span className="caret-blink text-accent select-none" aria-hidden>
          _
        </span>
      )}
    </span>
  );
}
