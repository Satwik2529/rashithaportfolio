interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`reveal-on-scroll mb-10 sm:mb-14 md:mb-16 ${alignClass} ${className}`}>
      <span className="section-label">{number}</span>
      <h2 className="section-title mt-3 sm:mt-4">
        {title}
        <span className="text-accent-cyan">·</span>
      </h2>
      {subtitle ? (
        <p
          className={`text-text-muted mt-3 text-sm sm:text-base max-w-md ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
