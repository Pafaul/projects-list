import { JobsEnum } from "~/types";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { jobs } from "~/components/workplace/data";
import { dateDelta, dateToString, deltaStr } from "~/utils";
import { Divider } from "@nextui-org/react";

export default function ShortInfoDescription({
  workplace,
}: {
  workplace: JobsEnum;
}) {
  const jobInfo = jobs[workplace];
  if (!jobInfo) {
    return (
      <div className="border-2">
        <h1>
          No info for {workplace}... <b>Yet!</b>
        </h1>
      </div>
    );
  }

  return (
    <Card>
      <CardBody className="flex flex-row items-center justify-center gap-3">
        {jobInfo.largeIcon()}

        <div className="flex flex-col items-center justify-center">
          <h1>{workplace}</h1>
          <h2>{jobInfo.position}</h2>
          <p>
            {dateToString(jobInfo.startDate)} - {dateToString(jobInfo.endDate)}
          </p>
          <p>{deltaStr(dateDelta(jobInfo.startDate, jobInfo.endDate))}</p>
        </div>
      </CardBody>
    </Card>
  );
}
