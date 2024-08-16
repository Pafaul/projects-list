import BaseIcon from "~/components/icons/base-icon";

function WorkplaceIcon({ src, alt }: { src: string; alt: string }) {
  return <BaseIcon src={src} alt={alt} w={75} h={75} />;
}

export function NoWorkplaceIcon() {
  return <WorkplaceIcon src="/404-tech-icon.png" alt="No icon" />;
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
  return <WorkplaceIcon src="/svoi.svg" alt="Svoi" />;
}

export function TokenStationIcon() {
  return <WorkplaceIcon src="/tokenstation.jpeg" alt="TokenStation" />;
}
