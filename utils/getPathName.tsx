  export const getLastPathName = (pathname: string): string => {
    const parts = pathname.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart;
  };

  export const getPathName = (pathname: string): string => {
    const modifiedString = pathname.replace(/-/g, ' ');
    return modifiedString;
  };