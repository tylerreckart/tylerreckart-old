import React, { PropTypes } from 'react';

const PostSlug = (props) => {
  const {
    className,
    content,
    datePublished,
    title,
    url,
  } = props;

  function formatDate(timestamp) {
    const date = new Date(timestamp);

    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    const month = date.getMonth();

    return `${month}/${day}/${year}`;
  }

  function handleStringLength(string, start, end) {
    if (string.length > end) {
      return `${string.substring(start, end).replace(/^\s+|\s+$/g, '')}...`;
    }

    return string;
  }

  function readingTime(string) {
    const minutes = Math.floor(string.length / 200);

    return `(${minutes} minute read)`;
  }

  function summarize(string) {
    if (string.length > 350) {
      return handleStringLength(string, 0, 350);
    }

    return string;
  }

  return (
    <div className={className}>
      <h2>{title}</h2>
      <span>{formatDate(datePublished)} {readingTime(content)}</span>
      <p>{summarize(content)}</p>
      <a href={url}>Read More</a>
    </div>
  );
};

PostSlug.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  datePublished: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PostSlug;
