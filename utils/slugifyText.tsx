function slugifyText(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Thay thế khoảng trắng bằng dấu gạch ngang
    .replace(/[^\w-]+/g, "") // Loại bỏ các ký tự đặc biệt và dấu cách
    .replace(/--+/g, "-"); // Loại bỏ các dấu gạch ngang liền kề
}

export default slugifyText;
