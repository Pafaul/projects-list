import Image from "next/image";

export default function BaseIcon({
  src,
  alt,
  w,
  h,
  className,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      className={`rounded ${className}`}
      style={{ maxWidth: w, maxHeight: h }}
    />
  );
}
