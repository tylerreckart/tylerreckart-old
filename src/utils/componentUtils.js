/**
 *
 *
 * @export
 * @param {any} timestamp
 * @returns
 */
export function formatDate(timestamp) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const weekdays = [
    'Sunday',
    'Monday',
    'Tueday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const date = new Date(timestamp);

  const weekday = weekdays[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${weekday} ${month} ${day}, ${year}`;
}

/**
 *
 *
 * @export
 * @param {any} string
 * @param {any} start
 * @param {any} end
 * @returns
 */
export function handleStringLength(string, start, end) {
  if (string.length > end) {
    return `${string.substring(start, end).replace(/^\s+|\s+$/g, '')}...`;
  }

  return string;
}

/**
 *
 *
 * @export
 * @param {any} string
 * @returns
 */
export function readingTime(string) {
  const minutes = Math.floor(string.length / 200);

  return `(${minutes} minute read)`;
}

/**
 *
 *
 * @export
 * @param {any} string
 * @returns
 */
export function summarize(string) {
  if (string.length > 350) {
    return handleStringLength(string, 0, 350);
  }

  return string;
}
