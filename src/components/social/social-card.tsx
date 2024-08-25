import {
  GithubIcon,
  GmailIcon,
  LinkedInIcon,
  TelegramIcon,
} from "~/components/icons/social-icons";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/react";

export enum SocialEnum {
  Telegram = "Telegram",
  LinkedIn = "LinkedIn",
  GMail = "GMail",
  Github = "Github",
}

type SocialInfo = {
  icon: () => React.ReactNode;
  link: string;
};

const data: Record<SocialEnum, SocialInfo> = {
  GMail: {
    icon: GmailIcon,
    link: "mailto:paulmihailov2013@gmail.com",
  },
  Github: {
    icon: GithubIcon,
    link: "https://github.com/Pafaul",
  },
  LinkedIn: {
    icon: LinkedInIcon,
    link: "https://linkedin.com/in/Pafaul",
  },
  Telegram: {
    icon: TelegramIcon,
    link: "https://t.me/Pafaul",
  },
};

export default function SocialCard({ social }: { social: SocialEnum }) {
  const info = data[social];

  return (
    <Card>
      <CardBody className="flex flex-col items-center justify-evenly">
        {info.icon()}
      </CardBody>
      <CardFooter className="flex flex-col items-center justify-evenly gap-3">
        <h1>{social}</h1>
        <a href={info.link} type="button" target="_blank">
          <Button>Contact me c:</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
