import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import showdown, { Converter } from 'showdown';
import { summarize } from '../../lib/componentUtils';
import styled from 'styled-components';
import moment from 'moment';

const Content = styled.div`
  line-height: 1.75em;
  max-width: 650px;

  a {
    color: #74808E;

    &:hover {
      border-bottom: 1px dotted #74808E;
    }
  }

  img {
    display: block;
    margin: 1.25em 0;
    width: 100%;
  }

  p {
    margin: 0 0 1.25em 0;
  }

  pre {
    background-color: rgba(240, 242, 244, .5);
    border-radius: 3px;
    font-weight: 300,
    line-height: 1.75em;
    margin: 2em 0;
    overflow: hidden;
    padding: 1.25em;

    code {
      font-family: Menlo, 'Roboto Mono', monospace;
      font-size: 12px;
      line-height: .5em;
    }
  }

  strong {
    font-weight: 600;
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

const Void = styled.div`
  display: block;
  height: 1em;
  width: 100%;
`;

const Post = props => {
  const {
    className,
    content,
    created,
    dispatch,
    summary,
    title,
    url,
  } = props;

  const dispatchRoute = (payload) => {
    const {
      dispatch,
      toggleMenu
    } = props;

    dispatch({ type: 'ROUTER_PUSH', payload: payload });
  };

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
      <Title><Link href="javascript:void(0)" onClick={() => dispatchRoute(url)}>{title}</Link></Title>
      {created ? <MetaInfo>{moment(created).format("MMMM Do, YYYY")}</MetaInfo> : <Void />}
      <Content>{!summary ? renderPost(content) : renderPost(preview)}</Content>
      {summary ? <Link onClick={() => dispatchRoute(url)}>Read More</Link> : null}
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
