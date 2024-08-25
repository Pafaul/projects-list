import { JobsEnum } from "~/types";
import { jobs } from "~/components/workplace/data";
import { dateDelta, dateToString, deltaStr } from "~/utils";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function WorkplaceInfo({ workplace }: { workplace: JobsEnum }) {
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
      <CardHeader className="gap-3">
        <Link href={jobInfo.link}>{jobInfo.icon({ variant: "medium" })}</Link>
        <div className="flex flex-col gap-3">
          <h1>{workplace}</h1>
          <p>
            {jobInfo.position}, {dateToString(jobInfo.startDate)} -{" "}
            {dateToString(jobInfo.endDate)},{" "}
            {deltaStr(dateDelta(jobInfo.startDate, jobInfo.endDate))}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>{jobInfo.description()}</CardBody>
      {jobInfo.stack.length > 0 && (
        <CardFooter className="flex flex-row items-center justify-evenly border-2">
          {jobInfo.stack.map((val, index) => (
            <div key={index} className="w-16 p-2">
              {val()}
            </div>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
