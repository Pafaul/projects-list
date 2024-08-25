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
            <ShortInfoDescription
              linkTo={"/#statecraft"}
              workplace={JobsEnum.Statecraft}
            />
            <ShortInfoDescription
              linkTo={"/#bluelight"}
              workplace={JobsEnum.Bluelight}
            />
            <ShortInfoDescription
              linkTo={"/#hodltree"}
              workplace={JobsEnum.HodlTree}
            />
            <ShortInfoDescription
              linkTo={"/#tokenstation"}
              workplace={JobsEnum.Tokenstation}
            />
            <ShortInfoDescription
              linkTo={"/#svoi"}
              workplace={JobsEnum.SVOIdev}
            />
            <ShortInfoDescription
              linkTo={"/#izzzio"}
              workplace={JobsEnum.IZZZIO}
            />
            <ShortInfoDescription
              linkTo={"/#vniins"}
              workplace={JobsEnum.Vniins}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="pt-10">Let's dive in!</h1>
          <div className="flex flex-col items-center gap-10">
            <div id="statecraft">
              <WorkplaceInfo workplace={JobsEnum.Statecraft} />
            </div>
            <div id="bluelight">
              <WorkplaceInfo workplace={JobsEnum.Bluelight} />
            </div>
            <div id="tokenstation">
              <WorkplaceInfo workplace={JobsEnum.Tokenstation} />
            </div>
            <div id="hodltree">
              <WorkplaceInfo workplace={JobsEnum.HodlTree} />
            </div>
            <div id="svoi">
              <WorkplaceInfo workplace={JobsEnum.SVOIdev} />
            </div>
            <div id="izzzio">
              <WorkplaceInfo workplace={JobsEnum.IZZZIO} />
            </div>
            <div id="vniins">
              <WorkplaceInfo workplace={JobsEnum.Vniins} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
