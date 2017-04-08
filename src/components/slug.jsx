import React, { PropTypes } from 'react';

const PostSlug = (props) => {
  const {
    content,
    title,
    url,
  } = props;

  function handleStringLength(string, start, end) {
    if (string.length > end) {
      return `${string.substring(start, end).replace(/^\s+|\s+$/g, '')}...`;
    }

    return string;
  }

  function summarize(string) {
    if (string.length > 350) {
      return handleStringLength(string, 0, 350);
    }

    return string;
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{summarize(content)}</p>
      <a href={url}>Read More</a>
    </div>
  );
};

PostSlug.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PostSlug;
