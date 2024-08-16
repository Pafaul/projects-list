import BaseIcon from "~/components/icons/base-icon";

function TechIcon({ src, alt }: { src: string; alt: string }) {
  return <BaseIcon src={src} alt={alt} w={50} h={50} />;
}

// TODO: Pics to add
// - vim: no image available
// - lua: no image available
// - go: no image available

// TODO: Resource images to add
// leetcode.svg
// linkedin.svg
// me.jpeg
// telegram.svg

export function NoTechIcon() {
  return <TechIcon src="/404-tech-icon.png" alt="No icon" />;
}

export function BashIcon() {
  return <TechIcon src="/bash.svg" alt="Bash" />;
}

export function DebianIcon() {
  return <TechIcon src="/debian.svg" alt="Debian" />;
}

export function UbuntuIcon() {
  return <TechIcon src="/ubuntu.svg" alt="Ubuntu" />;
}

export function DockerIcon() {
  return <TechIcon src="/docker-official.svg" alt="Docker" />;
}

export function EthereumIcon() {
  return <TechIcon src="/ethereum.svg" alt="Ethereum" />;
}

export function EverscaleIcon() {
  return <TechIcon src="/everscale.svg" alt="Everscale" />;
}

export function GithubIcon() {
  return <TechIcon src="/github.svg" alt="Github" />;
}

export function KubernetesIcon() {
  return <TechIcon src="/k8s.svg" alt="Kubernetes" />;
}

export function MongoDBIcon() {
  return <TechIcon src="/mongodb.svg" alt="MongoDB" />;
}

export function SolidityIcon() {
  return <TechIcon src="/solidity.svg" alt="Solidity" />;
}

export function TheGraphIcon() {
  return <TechIcon src="/theGraph.svg" alt="TheGraph" />;
}

export function NestJSIcon() {
  return <TechIcon src="/nestjs-icon.svg" alt="NestJS" />;
}

export function NodeJSIcon() {
  return <TechIcon src="/nodejs-icon.svg" alt="NodeJS" />;
}

export function HardhatIcon() {
  return <TechIcon src={"/hardhat.svg"} alt="Hardhat" />;
}

export function TronIcon() {
  return <TechIcon src="/tron.svg" alt="Tron" />;
}

export function TSLangIcon() {
  return <TechIcon src="/ts-lang.svg" alt="TSLang" />;
}
