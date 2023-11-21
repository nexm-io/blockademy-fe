export function hideEmail(email: string): string {
  if (email) {
    const atIndex = email.indexOf("@");
    if (atIndex !== -1) {
      const username = email.substring(0, atIndex);
      const maskedUsername =
        username.length > 3 ? username.substring(0, 3) + "*" : username;
      return maskedUsername + email.substring(atIndex);
    }
    return email;
  } else {
    return " "
  }
}
