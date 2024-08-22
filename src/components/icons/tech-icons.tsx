import BaseIcon from "~/components/icons/base-icon";

function TechIcon({
  src,
  alt,
  link,
}: {
  src: string;
  alt: string;
  link: string;
}) {
  return (
    <a href={link} target="_blank">
      <BaseIcon src={src} alt={alt} w={50} h={50} className="max-h-16" />
    </a>
  );
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
  return (
    <TechIcon
      src="/azure.svg"
      alt="Azure"
      link={"https://azure.microsoft.com/en-us"}
    />
  );
}

export function BashIcon() {
  return (
    <TechIcon
      src="/bash.svg"
      alt="Bash"
      link={"https://www.gnu.org/software/bash/"}
    />
  );
}

export function BitBucketIcon() {
  return (
    <TechIcon
      src="/bitbucket.svg"
      alt="BitBucket"
      link={"https://bitbucket.org/product/"}
    />
  );
}

export function GitLabIcon() {
  return (
    <TechIcon
      src="/gitlab.svg"
      alt="GitLab"
      link={"https://about.gitlab.com/"}
    />
  );
}

export function DebianIcon() {
  return (
    <TechIcon src="/debian.svg" alt="Debian" link={"https://www.debian.org/"} />
  );
}

export function UbuntuIcon() {
  return (
    <TechIcon src="/ubuntu.svg" alt="Ubuntu" link={"https://ubuntu.com/"} />
  );
}

export function DockerIcon() {
  return (
    <TechIcon
      src="/docker-official.svg"
      alt="Docker"
      link={"https://www.docker.com/"}
    />
  );
}

export function EthereumIcon() {
  return (
    <TechIcon
      src="/ethereum.svg"
      alt="Ethereum"
      link={"https://ethereum.org/en/"}
    />
  );
}

export function EverscaleIcon() {
  return (
    <TechIcon
      src="/everscale.svg"
      alt="Everscale"
      link={"https://everscale.network/"}
    />
  );
}

export function GithubIcon() {
  return (
    <TechIcon src="/github.svg" alt="Github" link={"https://github.com"} />
  );
}

export function KubernetesIcon() {
  return (
    <TechIcon src="/k8s.svg" alt="Kubernetes" link={"https://kubernetes.io/"} />
  );
}

export function LensIcon() {
  return <TechIcon src="/lens.svg" alt="Lens" link={"https://k8slens.dev/"} />;
}

export function PrometheusIcon() {
  return (
    <TechIcon
      src="/prometheus.svg"
      alt="Prometheus"
      link={"https://prometheus.io/"}
    />
  );
}

export function OpenTelemetryIcon() {
  return (
    <TechIcon
      src="/opentelemetry.svg"
      alt="OpenTelemetry"
      link={"https://opentelemetry.io/"}
    />
  );
}

export function KustomizeIcon() {
  return (
    <TechIcon
      src="/kustomize.png"
      alt="Kustomize"
      link={"https://kustomize.io/"}
    />
  );
}

export function SentryIcon() {
  return (
    <TechIcon src="/sentry.svg" alt="Sentry" link={"https://sentry.io/"} />
  );
}

export function MongoDBIcon() {
  return (
    <TechIcon
      src="/mongodb.svg"
      alt="MongoDB"
      link={"https://www.mongodb.com/"}
    />
  );
}

export function SolidityIcon() {
  return (
    <TechIcon
      src="/solidity.svg"
      alt="Solidity"
      link={"https://soliditylang.org/"}
    />
  );
}

export function TheGraphIcon() {
  return (
    <TechIcon
      src="/theGraph.svg"
      alt="TheGraph"
      link={"https://thegraph.com/"}
    />
  );
}

export function NestJSIcon() {
  return (
    <TechIcon
      src="/nestjs-icon.svg"
      alt="NestJS"
      link={"https://nestjs.com/"}
    />
  );
}

export function NodeJSIcon() {
  return (
    <TechIcon
      src="/nodejs-icon.svg"
      alt="NodeJS"
      link={"https://nodejs.org/"}
    />
  );
}

export function PythonIcon() {
  return (
    <TechIcon src="/python.svg" alt="Python" link={"https://python.org/"} />
  );
}

export function HardhatIcon() {
  return (
    <TechIcon
      src={"/hardhat.svg"}
      alt="Hardhat"
      link={"https://hardhat.org/"}
    />
  );
}

export function TronIcon() {
  return <TechIcon src="/tron.svg" alt="Tron" link={"https://tron.network/"} />;
}

export function TSLangIcon() {
  return (
    <TechIcon
      src="/ts-lang.svg"
      alt="TSLang"
      link={"https://www.typescriptlang.org/"}
    />
  );
}
