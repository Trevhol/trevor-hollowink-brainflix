const YEAR_MS = 31536000000;
const MONTH_MS = YEAR_MS / 12;
const MINUTE_MS = 1000 * 60;
const HOUR_MS = MINUTE_MS * 60;
const DAY_MS = HOUR_MS * 24;

//milliseconds elapsed since jan 1 / 1970
const relativeTime = (date) => {
  const currentDate = Date.now();
  const comparator = new Date(date);
  const diff = currentDate - comparator;
  const isGreaterThan1Year = diff > YEAR_MS;

  //checks time in milliseconds for each if statement based off milliseconds. Then returns the value "one day ago" , "1 year ago" etc.
  if (isGreaterThan1Year) {
    const years = Math.floor(diff / YEAR_MS);

    return years > 1 ? `${years} years ago` : "1 year ago";
  }

  if (diff > MONTH_MS) {
    const months = Math.floor(diff / MONTH_MS);

    return months > 1 ? `${months} months ago` : "1 month ago";
  }

  if (diff > DAY_MS) {
    const days = Math.floor(diff / DAY_MS);

    return days > 1 ? `${days} days ago` : "1 day ago";
  }

  if (diff > HOUR_MS) {
    const hours = Math.floor(diff / HOUR_MS);

    return hours > 1 ? `${hours} hours ago` : "1 hour ago";
  }

  if (diff > MINUTE_MS) {
    const minutes = Math.floor(diff / MINUTE_MS);

    return minutes > 1 ? `${minutes} minutes ago` : "1 minute ago";
  }

  const seconds = Math.floor(diff / 1000);

  return seconds > 1 ? `${seconds} seconds ago` : "1 second ago";
};

export default relativeTime;
