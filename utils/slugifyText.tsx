function slugifyText(text: string | undefined) {
  if (text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  } else {
    return "";
  }
}

export function formatTagName(tag: string) {
  const parts = tag.split("-");
  const formattedTag = parts.map((part) => part).join(" ");
  return formattedTag;
}

export default slugifyText;
