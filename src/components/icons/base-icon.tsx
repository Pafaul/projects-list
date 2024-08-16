import Image from "next/image";

export default function BaseIcon({
  src,
  alt,
  w,
  h,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
}) {
  return <Image src={src} alt={alt} width={w} height={h} className="rounded" />;
}
