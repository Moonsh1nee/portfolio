import Image from "next/image";

export default function WindowFrame({
  src,
  alt,
  label,
  priority = false,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-lg border border-border-strong bg-surface shadow-(--shadow-frame) ${className}`}
    >
      <figcaption className="flex h-8 items-center border-b border-border bg-surface-2 px-3 font-mono text-[11px] text-muted">
        <span className="truncate">{label}</span>
      </figcaption>
      <div className="relative aspect-16/10 bg-surface-2">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
    </figure>
  );
}
