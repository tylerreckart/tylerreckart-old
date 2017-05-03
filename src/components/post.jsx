import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { Converter } from 'showdown';
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
      color: '#BBBBBB',
      display: 'block',
      fontSize: '16px',
      fontWeight: '600',
      margin: '.75em 0',
      maxWidth: '650px',
    },
    permalink: {
      color: 'inherit',
      display: 'inline-block',
      textDecoration: 'none',
    },
    readMore: {
      color: '#1B95E0',
      margin: '1em 0 0 0',
    },
    summary: {
      fontSize: '16px',
      lineHeight: '1.75em',
      maxWidth: '650px',
    },
    title: {
      color: '#000000',
      fontSize: '28px',
      fontWeight: '800',
      letterSpacing: '0.05em',
      maxWidth: '650px',
    },
  });

  const body = new Converter().makeHtml(content);

  return (
    <div className={className}>
      <div>
        <h2 className={css(Styles.title)}>
          <a className={css(Styles.permalink)} href={url}>{title}</a>
        </h2>

        <span className={css(Styles.meta)}>
          {formatDate(datePublished)} {readingTime(content)}
        </span>

        <p className={css(Styles.summary)}>
          {!summary ? <div dangerouslySetInnerHTML={{ __html: body }} /> : summarize(content)}
        </p>
        {!summary ? <div /> : <a className={css(Styles.permalink, Styles.readMore)} href={url}>Read More</a>}
      </div>
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
