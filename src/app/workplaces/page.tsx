import React from "react";
import WorkplaceInfo from "~/components/workplace/info-selector";
import { JobsEnum } from "~/types";

export default function Workplaces() {
  return (
    <div className="flex flex-col">
      <WorkplaceInfo workplace={JobsEnum.MyOwn} />
      <WorkplaceInfo workplace={JobsEnum.Futurestate} />
      <WorkplaceInfo workplace={JobsEnum.Bluelight} />
      <WorkplaceInfo workplace={JobsEnum.Tokenstation} />
      <WorkplaceInfo workplace={JobsEnum.HodlTree} />
      <WorkplaceInfo workplace={JobsEnum.SVOIdev} />
      <WorkplaceInfo workplace={JobsEnum.IZZZIO} />
      <WorkplaceInfo workplace={JobsEnum.Vniins} />
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
