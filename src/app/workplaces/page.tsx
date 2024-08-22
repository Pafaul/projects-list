import React from "react";
import WorkplaceInfo from "~/components/workplace/info-selector";
import { JobsEnum } from "~/types";
import ShortInfoDescription from "~/components/workplace/short-info-selector";
import SocialCard, { SocialEnum } from "~/components/social/social-card";

export default function Workplaces() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-5/6 flex-col items-center gap-y-10">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Nice to meet you, I'm Pavel!</h1>
          <p className="text-xl">
            Currently I'm a <b>blockchain developer</b>, doing different things
            trying to find out what I like the most
          </p>
          <br />
          <p className="text-xl">
            The most interesting so far is designing the systems making sure
            that they can interact with every other part of the system, and
            developing automations/internal tools that will solve some problem
            that exists either for the whole team or just for me
          </p>
          <br />
        </div>
        <div className="flex w-full flex-col items-center gap-3">
          <h1>My own projects</h1>
          <text>
            This is something I've done just out of curiosity, while learning,
            or for some other reason that is unknown for myself
          </text>
          <WorkplaceInfo workplace={JobsEnum.MyOwn} />
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl">Here you can find me</h1>
          <div className="items-evenly grid auto-rows-max grid-cols-4 gap-10">
            <SocialCard social={SocialEnum.Github} />
            <SocialCard social={SocialEnum.Telegram} />
            <SocialCard social={SocialEnum.LinkedIn} />
            <SocialCard social={SocialEnum.GMail} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl">
            And here's the stuff I've being doing professionally for some time
            (creating web-pages was I not)
          </h1>
          <div className="grid grid-cols-3 justify-evenly gap-10">
            <ShortInfoDescription workplace={JobsEnum.Statecraft} />
            <ShortInfoDescription workplace={JobsEnum.Bluelight} />
            <ShortInfoDescription workplace={JobsEnum.HodlTree} />
            <ShortInfoDescription workplace={JobsEnum.Tokenstation} />
            <ShortInfoDescription workplace={JobsEnum.SVOIdev} />
            <ShortInfoDescription workplace={JobsEnum.IZZZIO} />
            <ShortInfoDescription workplace={JobsEnum.Vniins} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="pt-10">Let's dive in!</h1>
          <div className="flex flex-col items-center gap-10">
            <WorkplaceInfo workplace={JobsEnum.Statecraft} />
            <WorkplaceInfo workplace={JobsEnum.Bluelight} />
            <WorkplaceInfo workplace={JobsEnum.Tokenstation} />
            <WorkplaceInfo workplace={JobsEnum.HodlTree} />
            <WorkplaceInfo workplace={JobsEnum.SVOIdev} />
            <WorkplaceInfo workplace={JobsEnum.IZZZIO} />
            <WorkplaceInfo workplace={JobsEnum.Vniins} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Workplace({
  position,
  place,
  startDate,
  endDate,
  description,
  icon,
  children,
}: Readonly<{
  position: string;
  place: string;
  startDate?: Date;
  endDate?: Date;
  description: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row gap-x-32 border-2">
      {icon}
      <div className="flex flex-col flex-nowrap border-2">
        <h1>
          {position} at {place}
        </h1>
        <h3>
          {dateToString(startDate)} - {dateToString(endDate)}
        </h3>
        <text>{description || "Not here yet"}</text>
      </div>

      <div className="flex flex-col flex-wrap justify-between border-2">
        {children}
      </div>
    </div>
  );
}

function dateToString(date?: Date) {
  if (!date) {
    return "Present";
  }

  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}
