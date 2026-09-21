/**
 * A practitioner's AHPRA registration number.
 *
 * AHPRA's advertising guidelines require the registration number to appear
 * wherever a registered health practitioner is named, so this sits alongside
 * every doctor's name/role across the site.
 */
export function AhpraReg({
  number,
  className = "",
}: {
  number: string;
  /** Override colour/spacing for dark or tighter contexts. */
  className?: string;
}) {
  if (!number) return null;
  return (
    <p className={`text-xs tracking-wide text-ink-soft ${className}`}>
      AHPRA Reg. <span className="font-medium text-ink">{number}</span>
    </p>
  );
}
