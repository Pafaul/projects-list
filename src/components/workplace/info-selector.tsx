import { JobsEnum } from "~/types";
import { jobs } from "~/components/workplace/data";

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
    <div className="flex flex-row border-2">
      <div className="flex flex-col">
        <div className="flex flex-row border-2">
          {jobInfo.icon()}
          <div className="flex flex-col">
            <h1>
              {jobInfo.position} at {workplace}
            </h1>
            <h2>
              {dateToString(jobInfo.startDate)} -{" "}
              {dateToString(jobInfo.endDate)}, at this place:
              {" " + deltaStr(dateDelta(jobInfo.startDate, jobInfo.endDate))}
            </h2>
          </div>
        </div>
        <div className="border-2">{jobInfo.description()}</div>
      </div>
      <div className="flex flex-col flex-wrap justify-between border-2">
        {jobInfo.stack.map((val, index) => (
          <div key={index}>{val()}</div>
        ))}
      </div>
    </div>
  );
}

function dateToString(date?: Date) {
  if (!date) {
    return "Present";
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${padZero(month)}-${padZero(day)}`;
}

function dateDelta(start: Date, finish?: Date) {
  if (!finish) {
    finish = new Date();
  }

  const delta = finish - start;
  return new Date(delta);
}

function deltaStr(delta: Date) {
  const yearsDelta = delta.getUTCFullYear() - 1970;
  const monthDelta = delta.getMonth();
  const dayDelta = delta.getDate();

  let str = "";
  if (yearsDelta) {
    str += `${yearsDelta} years `;
  }
  if (monthDelta) {
    str += `${monthDelta} months `;
  }
  if (dayDelta) {
    str += `${dayDelta} days`;
  }

  return str;
}

function padZero(num: number): string {
  if (num < 10) {
    return "0" + num;
  }

  return num.toString();
}
