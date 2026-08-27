import { ArrowUpRight, Link2 } from "lucide-react";

export default function LinkSlot({
  href,
  label = "View link",
  placeholder = "Add link",
}: {
  href?: string;
  label?: string;
  placeholder?: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="focus-ring inline-flex items-center gap-1 font-mono text-xs text-rose-600 transition-colors hover:text-plum-950"
      >
        {label}
        <ArrowUpRight size={12} />
      </a>
    );
  }

  return (
    <span
      title="Add this link in components/siteConfig.ts"
      className="inline-flex items-center gap-1 rounded-full border border-dashed border-rose-200 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-rose-300"
    >
      <Link2 size={10} />
      {placeholder}
    </span>
  );
}
