import { BrandIcon, resolveBrandIcon } from "@/components/brand-icon";

type TechnologyPillProps = {
  className?: string;
  label: string;
  monochromeIcon?: boolean;
};

export function TechnologyPill({
  className,
  label,
  monochromeIcon = false,
}: TechnologyPillProps) {
  const iconName = resolveBrandIcon(label);

  return (
    <span className={className}>
      <span className="inline-flex items-center gap-2">
        {iconName ? (
          <BrandIcon
            name={iconName}
            size={14}
            monochrome={monochromeIcon}
            className="shrink-0"
          />
        ) : null}
        <span>{label}</span>
      </span>
    </span>
  );
}
