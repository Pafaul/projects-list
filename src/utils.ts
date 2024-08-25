export function dateToString(date?: Date) {
  if (!date) {
    return "Present";
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return `${year}-${padZero(month)}`;
}

export function dateDelta(start: Date, finish?: Date) {
  if (!finish) {
    finish = new Date();
  }

  const delta = finish.getUTCDate() - start.getUTCDate();
  return new Date(delta);
}

export function deltaStr(delta: Date) {
  const yearsDelta = delta.getUTCFullYear() - 1970;
  const monthDelta = delta.getMonth();

  let str = "";
  if (yearsDelta) {
    str += `${yearsDelta} years `;
  }
  if (monthDelta) {
    str += `${monthDelta} months`;
  }

  return str;
}

export function padZero(num: number): string {
  if (num < 10) {
    return "0" + num;
  }

  return num.toString();
}
