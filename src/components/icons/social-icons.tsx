import BaseIcon from "~/components/icons/base-icon";

function SocialIcon({ src, alt }: { src: string; alt: string }) {
  return <BaseIcon src={src} alt={alt} w={150} h={150} />;
}

export function TelegramIcon() {
  return <SocialIcon src="/telegram.svg" alt="telegram" />;
}

export function LinkedInIcon() {
  return <SocialIcon src="/linkedin.svg" alt="LinkedIn" />;
}

export function GithubIcon() {
  return <SocialIcon src="/github.svg" alt="Github" />;
}

export function GmailIcon() {
  return <SocialIcon src="/gmail.svg" alt="GMail" />;
}
