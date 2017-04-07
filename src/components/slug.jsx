import React, { PropTypes } from 'react';
import Meta from './meta';

const PostSlug = (props) => {
  const {
    datePublished,
    summary,
    title,
    url,
  } = props;

  return (
    <div>
      <h2>{title}</h2>
      <Meta datePublished={datePublished} />
      <p>{summary}</p>
      <a href={url}>Read More</a>
    </div>
  );
};

PostSlug.propTypes = {
  datePublished: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PostSlug;
