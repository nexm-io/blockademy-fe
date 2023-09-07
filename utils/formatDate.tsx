// utils/dateUtils.js

export function formatDate(inputDateStr: string) {
  const originalDate = new Date(inputDateStr);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[originalDate.getMonth()];
  const day = originalDate.getDate();
  const year = originalDate.getFullYear();
  return `${month} ${day.toString().padStart(2, "0")}, ${year}`;
}
