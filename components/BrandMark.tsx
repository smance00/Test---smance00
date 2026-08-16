import Image from "next/image";

type BrandMarkProps = {
  height?: number;
  variant?: "auto" | "light" | "dark";
  className?: string;
};

export function BrandMark({
  height = 22,
  variant = "auto",
  className = "",
}: BrandMarkProps) {
  const width = Math.round((1431 / 315) * height);

  if (variant === "dark") {
    return (
      <Image
        src="/brand/wordmark-dark.png"
        alt="Olevy"
        width={width}
        height={height}
        className={className}
        style={{ height, width: "auto" }}
        priority
      />
    );
  }

  if (variant === "light") {
    return (
      <Image
        src="/brand/wordmark-light.png"
        alt="Olevy"
        width={width}
        height={height}
        className={className}
        style={{ height, width: "auto" }}
        priority
      />
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/brand/wordmark-light.png"
        alt="Olevy"
        width={width}
        height={height}
        className="block dark:hidden"
        style={{ height, width: "auto" }}
        priority
      />
      <Image
        src="/brand/wordmark-dark.png"
        alt="Olevy"
        width={width}
        height={height}
        className="hidden dark:block"
        style={{ height, width: "auto" }}
        priority
      />
    </span>
  );
}
