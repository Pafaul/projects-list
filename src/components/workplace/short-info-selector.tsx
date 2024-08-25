import { JobsEnum } from "~/types";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { jobs } from "~/components/workplace/data";
import { dateDelta, dateToString, deltaStr } from "~/utils";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function ShortInfoDescription({
  workplace,
  linkTo,
}: {
  workplace: JobsEnum;
  linkTo: string;
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
        {jobInfo.link && (
          <Link href={linkTo} scroll={true}>
            {jobInfo.icon({ variant: "large" })}
          </Link>
        )}
        {!jobInfo.link && <>{jobInfo.icon({ variant: "large" })}</>}
        <div className="pr-5" />

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
