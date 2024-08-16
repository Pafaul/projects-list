import { JobsEnum } from "~/types";
import { undefined } from "zod";
import {
  BluelightIcon,
  HodlTreeIcon,
  IzzzioIcon,
  NoWorkplaceIcon,
  SvoiIcon,
  TokenStationIcon,
} from "~/components/icons/workplace-icons";
import {
  BluelightDescription,
  HodlTreeDescription,
  IzzzioDescription,
  NoDescriptionYet,
  SignedAnNDA,
  SvoiDescription,
  TokenstationDescription,
  VniinsDescription,
} from "~/components/descriptions/descriptions";
import {
  BashIcon,
  DebianIcon,
  DockerIcon,
  EthereumIcon,
  EverscaleIcon,
  GithubIcon,
  HardhatIcon,
  KubernetesIcon,
  MongoDBIcon,
  NestJSIcon,
  NodeJSIcon,
  SolidityIcon,
  TheGraphIcon,
  TronIcon,
  UbuntuIcon,
} from "~/components/icons/tech-icons";

export type JobDescription = {
  icon: () => React.ReactNode;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: () => React.ReactNode;
  stack: (() => React.ReactNode)[];
};

export const jobs: Record<JobsEnum, JobDescription | undefined> = {
  Futurestate: {
    icon: NoWorkplaceIcon,
    position: "Blockchain developer",
    startDate: new Date("2024-03-01"),
    description: NoDescriptionYet,
    stack: [],
  },
  HodlTree: {
    icon: HodlTreeIcon,
    position: "Blockchain developer",
    startDate: new Date("2022-02"),
    endDate: new Date("2022-05"),
    description: HodlTreeDescription,
    stack: [EthereumIcon, SolidityIcon, HardhatIcon, GithubIcon],
  },
  IZZZIO: {
    icon: IzzzioIcon,
    position: "Blockchain developer",
    startDate: new Date("2020-03"),
    endDate: new Date("2020-05"),
    description: IzzzioDescription,
    stack: [NodeJSIcon, GithubIcon],
  },
  MyOwn: {
    icon: NoWorkplaceIcon,
    position: "CEO & CTO & The one and only employee",
    startDate: new Date("1999-09-23"),
    description: NoDescriptionYet,
    stack: [],
  },
  SVOIdev: {
    icon: SvoiIcon,
    position: "Blockchain developer",
    startDate: new Date("2020-09"),
    endDate: new Date("2022-02"),
    description: SvoiDescription,
    stack: [
      EverscaleIcon,
      NodeJSIcon,
      MongoDBIcon,
      BashIcon,
      UbuntuIcon,
      GithubIcon,
    ],
  },
  Tokenstation: {
    icon: TokenStationIcon,
    position: "Blockchain developer",
    startDate: new Date("2021-09"),
    endDate: new Date("2024-01"),
    description: TokenstationDescription,
    stack: [
      TronIcon,
      EthereumIcon,
      SolidityIcon,
      HardhatIcon,
      NodeJSIcon,
      MongoDBIcon,
      DockerIcon,
      UbuntuIcon,
      GithubIcon,
    ],
  },
  Bluelight: {
    icon: BluelightIcon,
    position: "Blockchain developer",
    startDate: new Date("2022-11-25"),
    endDate: new Date("2024-02-29"),
    description: BluelightDescription,
    stack: [
      EthereumIcon,
      SolidityIcon,
      TheGraphIcon,
      NestJSIcon,
      HardhatIcon,
      BashIcon,
      DockerIcon,
      KubernetesIcon,
      UbuntuIcon,
    ],
  },
  Vniins: {
    icon: NoWorkplaceIcon,
    position: "DevOps engineer",
    startDate: new Date("2018-12"),
    endDate: new Date("2022-06"),
    description: VniinsDescription,
    stack: [BashIcon, DockerIcon, DebianIcon],
  },
};
