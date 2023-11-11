import { parse, addHours, format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const formatTimestamp = (value: string) => {
  const utcTime = parse(value, "yyyy-MM-dd HH:mm:ss", new Date());
  const utcPlus7Time = addHours(utcTime, 7);
  const timestamp = utcPlus7Time.getTime();
  return timestamp;
};

export const formatDate = (value: string) => {
  if (!value) return "";
  const timeZone = "Asia/Bangkok";
  const date = utcToZonedTime(new Date(value), timeZone);
  const formattedDate = format(date, "dd/MM/yyyy");
  return formattedDate;
};

export const formatUtcTime = (value: any) => {
  if (!value) return "";
  var date = new Date(value);
  var utcTime = date.toISOString();
  return utcTime;
};
