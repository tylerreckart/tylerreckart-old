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

  const date = new Date(timestamp);

  const month = months[date.getMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${day}, ${year}`;
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
  const minutes = Math.floor(string.split(' ').length / 220);

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

import { StyleSheet } from 'aphrodite';

const globalSelectorHandler = (selector, _, generateSubtreeStyles) => {
  if (selector[0] !== '*') {
    return null;
  }
  return generateSubtreeStyles(selector.slice(1));
};

const globalExtension = { selectorHandler: globalSelectorHandler };

export const extended = StyleSheet.extend([globalExtension]);
