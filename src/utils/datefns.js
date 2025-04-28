/*function timeAgo(dateString) {
  const now = new Date();
  const pastDate = new Date(dateString);
  const diffInSeconds = Math.floor((now - pastDate) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInMonth = 30 * secondsInDay;
  const secondsInYear = 365 * secondsInDay;

  if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < secondsInMonth) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < secondsInYear) {
    const months = Math.floor(diffInSeconds / secondsInMonth);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInSeconds / secondsInYear);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
}*/

export const timeAgo = (dateString) => {
  const now = new Date();
  const pastDate = new Date(dateString);
  const diffInSeconds = Math.floor((now - pastDate) / 1000);

  const timeUnits = [
    { unit: 'year', value: 365 * 24 * 60 * 60 },
    { unit: 'month', value: 30 * 24 * 60 * 60 },
    { unit: 'day', value: 24 * 60 * 60 },
    { unit: 'hour', value: 60 * 60 },
    { unit: 'minute', value: 60 },
  ];

  for (let { unit, value } of timeUnits) {
    const time = Math.floor(diffInSeconds / value);
    if (time >= 1) {
      return `${time} ${unit}${time > 1 ? 's' : ''} ago`;
    }
  }

  return `${diffInSeconds} seconds ago`;
}
