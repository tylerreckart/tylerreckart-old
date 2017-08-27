import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import showdown, { Converter } from 'showdown';
import { extended, formatDate, readingTime, summarize } from '../utils/componentUtils';

import NewsletterSignupForm from './newsletter';

const Post = (props) => {
  const {
    className,
    content,
    datePublished,
    summary,
    title,
    url,
  } = props;

  const Styles = extended.StyleSheet.create({
    globals: {
      '*p': {
        fontWeight: 300,
        margin: '0 0 1em 0',
        '*code': {
          fontFamily: 'Menlo, "Roboto Mono", monospace',
          fontSize: '13px',
        },
      },
      '*img': {
        display: 'block',
        width: '100%',
        margin: '1em 0',
      },
      '*strong': {
        fontWeight: 600,
      },
      '*em': {
        fontStyle: 'italic',
      },
      '*h3': {
        fontSize: '16px',
        fontWeight: 600,
      },
      '*pre': {
        lineHeight: '1.5em',
        padding: '1em',
        borderRadius: '3px',
        overflow: 'hidden',
        margin: '2em 0',
        backgroundColor: 'rgba(240, 242, 244, .5)',
        fontWeight: 300,
      },
    },
    meta: {
      color: '#74808E',
      display: 'block',
      fontSize: '14px',
      fontWeight: 200,
      margin: '1.25em 0',
      maxWidth: '650px',
    },
    permalink: {
      color: 'inherit',
      display: 'inline-block',
      textDecoration: 'none',
    },
    readMore: {
      color: '#414EF9',
      fontWeight: 200,
      margin: '1em 0 0 0',
    },
    summary: {
      fontSize: '16px',
      lineHeight: '1.75em',
      maxWidth: '650px',
    },
    title: {
      color: '#414EF9',
      fontSize: '24px',
      fontWeight: 200,
      letterSpacing: '0.05em',
      lineHeight: '1.25em',
      maxWidth: '650px',
    },
    fullWidth: {
      width: '100%',
    }
  });

  function convertNewLines(str) {
    var $str = str; 
    $str = $str.replace(/\\n/g, '<br />');
    return $str;
  };

  const preview = summarize(content);
  const converter = content => {
    return new Converter().makeHtml(convertNewLines(content));
  };


  return (
    <div className={css(Styles.fullWidth)}>
      <div>
        <h2 className={css(Styles.title)}>
          <a className={css(Styles.permalink)} href={url}>{title}</a>
        </h2>

        <span className={css(Styles.meta)}>
          {formatDate(datePublished)} {readingTime(content)}
        </span>

        <div className={css(Styles.summary)}>
          {
            !summary ?
              <div className={extended.css(Styles.globals)} dangerouslySetInnerHTML={{ __html: converter(content) }} />
             :
              <div className={extended.css(Styles.globals)} dangerouslySetInnerHTML={{ __html: converter(preview) }} />
          }
        </div>
        {!summary ? null : <a className={css(Styles.permalink, Styles.readMore)} href={url}>Read More</a>}
      </div>
      {!summary ? <NewsletterSignupForm /> : null}
    </div>
  );
};

Post.defaultProps = {
  summary: true,
};

Post.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.number,
  summary: PropTypes.bool,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Post;
