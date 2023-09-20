export function formatDate(inputDateStr: string | Date | number) {
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
export const formatISODateToMonthDayYear = (isoDate: string): string => {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};

export function getDate(inputDateStr: string | Date) {
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
  return new Date(`${month} ${day.toString().padStart(2, "0")}, ${year}`);
}

export function formatDateSlash(inputDate: string | Date) {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
