import BaseIcon from "~/components/icons/base-icon";

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
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <BaseIcon src={src} alt={alt} w={75} h={75} className={className} />;
}

export function NoWorkplaceIcon() {
  return <h1>¯\_(ツ)_/¯</h1>;
}

export function BluelightIcon() {
  return <WorkplaceIcon src="/bluelight.svg" alt="Bluelight" />;
}

export function HodlTreeIcon() {
  return <WorkplaceIcon src="/hodltree.ico" alt="HodlTree" />;
}

export function IzzzioIcon() {
  return <WorkplaceIcon src="/izzzio.jpeg" alt="Izzzio" />;
}

export function SvoiIcon() {
  return <WorkplaceIcon src="/svoi.svg" alt="Svoi" className="bg-black" />;
}

export function TokenStationIcon() {
  return <WorkplaceIcon src="/tokenstation.jpeg" alt="TokenStation" />;
}

export function NoWorkplaceLargeIcon() {
  return NoWorkplaceIcon();
}

export function BluelightLargeIcon() {
  return <LargeWorkplaceIcon src="/bluelight.svg" alt="Bluelight" />;
}

export function HodlTreeLargeIcon() {
  return <LargeWorkplaceIcon src="/hodltree.ico" alt="HodlTree" />;
}

export function IzzzioLargeIcon() {
  return <LargeWorkplaceIcon src="/izzzio.jpeg" alt="Izzzio" />;
}

export function SvoiLargeIcon() {
  return <LargeWorkplaceIcon src="/svoi.svg" alt="Svoi" className="bg-black" />;
}

export function TokenStationLargeIcon() {
  return <LargeWorkplaceIcon src="/tokenstation.jpeg" alt="TokenStation" />;
}
