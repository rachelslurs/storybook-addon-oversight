import type { ReactNode } from 'react';

export interface PanelProps {
  /** Content rendered inside the panel. */
  children?: ReactNode;
  // Undocumented on purpose. It would normally trip prop-descriptions-missing,
  // but the @oversightIgnore below exempts that rule for this component.
  slot?: string;
}

/**
 * An internal scaffolding surface. Its `slot` prop is intentionally undocumented,
 * so `@oversightIgnore` exempts this component from the prop-coverage rule: a
 * deliberate opt-out, not an oversight.
 *
 * @oversightIgnore prop-descriptions-missing
 */
export function Panel({ children }: PanelProps) {
  return <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">{children}</div>;
}
