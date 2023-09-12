export function convertEpochToDateTime(epochTimestamp : number ) {
    if(epochTimestamp) {
      const datetime = new Date(epochTimestamp * 1000).toUTCString();
    return datetime;
    } else return "";
  }