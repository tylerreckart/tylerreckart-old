import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import showdown, { Converter } from 'showdown';
import { summarize } from '../../utils/componentUtils';
import styled from 'styled-components';
import moment from 'moment';

const Content = styled.div`
  line-height: 1.75em;
  max-width: 650px;

  img {
    display: block;
    margin: 1.25em 0;
    width: 100%;
  }

  p {
    margin: 0 0 1.25em 0;
    code {
      font-family: Menlo, 'Roboto Mono', monospace;
    }
  }

  pre {
    background-color: rgba(240, 242, 244, .5);
    border-radius: 3px;
    font-weight: 300,
    line-height: 1.5em;
    margin: 2em 0;
    overflow: hidden;
    padding: 1.25em;
  }
`;

const Link = styled.a`
  color: inherit;
  display: inline-block;
  text-decoration: none;
`;

const MetaInfo = styled.div`
  color: #74808E;
  margin: 1em 0;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25em;
  letter-spacing: .05em;
`;

const Post = props => {
  const {
    className,
    content,
    created,
    summary,
    title,
    url,
  } = props;

  const preview = summarize(content);

  const convertNewLines = str => {
    var $str = str; 
    $str = $str.replace(/\\n/g, '<br />');
    return $str;
  };

  const converter = markdown => (
    new Converter().makeHtml(convertNewLines(markdown))
  );

  const renderPost = text => (
    <div dangerouslySetInnerHTML={{ __html: converter(text) }} />
  );

  return (
    <div>
      <Title><Link href={url}>{title}</Link></Title>
      <MetaInfo>{moment(created).format("MMMM Do, YYYY")}</MetaInfo>
      <Content>{!summary ? renderPost(content) : renderPost(preview)}</Content>
      {summary ? <Link href={url} style={{ color: 'rgba(56, 119, 250, 1.00)' }}>Read More</Link> : null}
    </div>
  );
};

Post.defaultProps = {
  summary: true,
};

Post.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  created: PropTypes.string,
  summary: PropTypes.bool,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Post;
