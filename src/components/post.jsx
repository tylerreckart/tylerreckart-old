import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { formatDate, readingTime, summarize } from '../utils/componentUtils';

const Post = (props) => {
  const {
    className,
    content,
    datePublished,
    summary,
    title,
    url,
  } = props;

  const Styles = StyleSheet.create({
    meta: {
      display: 'block',
      margin: '.75em 0 .75em 0',
    },
    permalink: {
      display: 'block',
      margin: '.75em 0 0 0',
    },
    summary: {
      lineHeight: '1.25em',
    },
    title: {
      fontSize: '1.5em',
      fontWeight: '600',
    },
  });

  return (
    <div className={className}>
      <h2 className={css(Styles.title)}>
        <a href={url}>{title}</a>
      </h2>

      <span className={css(Styles.meta)}>
        {formatDate(datePublished)} {readingTime(content)}
      </span>

      <p className={css(Styles.summary)}>
        {!summary ? content : summarize(content)}
      </p>
      {!summary ? <div /> : <a className={css(Styles.permalink)} href={url}>Read More</a>}
    </div>
  );
};

Post.defaultProps = {
  summary: true,
};

Post.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  datePublished: PropTypes.number.isRequired,
  summary: PropTypes.bool,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Post;
