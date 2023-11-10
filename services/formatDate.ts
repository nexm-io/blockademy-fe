import { parse, addHours } from "date-fns";

export const formatTimestamp = (value: string) => {
  const utcTime = parse(value, "yyyy-MM-dd HH:mm:ss", new Date());
  const utcPlus7Time = addHours(utcTime, 7);
  const timestamp = utcPlus7Time.getTime();
  return timestamp;
};
