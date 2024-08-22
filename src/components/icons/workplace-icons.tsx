import BaseIcon from "~/components/icons/base-icon";

export type IconVariant = "small" | "medium" | "large";

function LargeWorkplaceIcon({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <BaseIcon src={src} alt={alt} w={150} h={150} className={className} />;
}

function WorkplaceIcon({
  src,
  alt,
  className,
  variant,
}: {
  src: string;
  alt: string;
  variant: IconVariant;
  className?: string;
}) {
  let s = 0;
  switch (variant) {
    case "large":
      s = 150;
      break;
    case "medium":
      s = 75;
      break;
    case "small":
      s = 35;
  }

  return <BaseIcon src={src} alt={alt} w={s} h={s} className={className} />;
}

export function NoWorkplaceIcon() {
  return <h1>¯\_(ツ)_/¯</h1>;
}

export function MeWorkplaceIcon({ variant }: { variant: IconVariant }) {
  return <WorkplaceIcon src="/me.jpg" alt="Its'a me" variant={variant} />;
}

export function StatecraftIcon({ variant }: { variant: IconVariant }) {
  return (
    <WorkplaceIcon src="/statecraft.svg" alt="Statecraft" variant={variant} />
  );
}

export function BluelightIcon({ variant }: { variant: IconVariant }) {
  return (
    <WorkplaceIcon src="/bluelight.svg" alt="Bluelight" variant={variant} />
  );
}

export function HodlTreeIcon({ variant }: { variant: IconVariant }) {
  return <WorkplaceIcon src="/hodltree.ico" alt="HodlTree" variant={variant} />;
}

export function IzzzioIcon({ variant }: { variant: IconVariant }) {
  return <WorkplaceIcon src="/izzzio.jpeg" alt="Izzzio" variant={variant} />;
}

export function SvoiIcon({ variant }: { variant: IconVariant }) {
  return (
    <WorkplaceIcon
      src="/svoi.svg"
      alt="Svoi"
      className="bg-black"
      variant={variant}
    />
  );
}

export function TokenStationIcon({ variant }: { variant: IconVariant }) {
  return (
    <WorkplaceIcon
      src="/tokenstation.jpeg"
      alt="TokenStation"
      variant={variant}
    />
  );
}
