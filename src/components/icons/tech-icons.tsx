import BaseIcon from "~/components/icons/base-icon";

function TechIcon({ src, alt }: { src: string; alt: string }) {
  return <BaseIcon src={src} alt={alt} w={50} h={50} className="max-h-16" />;
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
  return <h1>¯\_(ツ)_/¯</h1>;
}

export function AzureIcon() {
  return <TechIcon src="/azure.svg" alt="Azure" />;
}

export function BashIcon() {
  return <TechIcon src="/bash.svg" alt="Bash" />;
}

export function BitBucketIcon() {
  return <TechIcon src="/bitbucket.svg" alt="BitBucket" />;
}

export function GitLabIcon() {
  return <TechIcon src="/gitlab.svg" alt="GitLab" />;
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

export function LensIcon() {
  return <TechIcon src="/lens.svg" alt="Lens" />;
}

export function PrometheusIcon() {
  return <TechIcon src="/prometheus.svg" alt="Prometheus" />;
}

export function OpenTelemetryIcon() {
  return <TechIcon src="/opentelemetry.svg" alt="OpenTelemetry" />;
}

export function KustomizeIcon() {
  return <TechIcon src="/kustomize.png" alt="Kustomize" />;
}

export function SentryIcon() {
  return <TechIcon src="/sentry.svg" alt="Sentry" />;
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

export function PythonIcon() {
  return <TechIcon src="/python.svg" alt="Python" />;
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
