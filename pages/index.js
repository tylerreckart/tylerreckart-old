import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';
import Feed from '../components/Feed';
import Footer from '../components/Footer';
import Header from '../components/Header';
import apollo from '../lib/apollo';
import 'isomorphic-fetch';
import 'babel-polyfill';

const query = gql`
  query {
    allPosts(orderBy: ID_ASC) {
      nodes {
        title
        created
        content
        url
      }
    }
  }
`;

const Rect = styled.div`
  display: block;
  @media (max-width: 700px) {
    display: block;
    padding: 0 1em;
  }
`;

export default class Home extends Component {
  static async getInitialProps({ req }) {
    return await apollo.query({
      query,
    });
  }

  render() {
    let posts = [];
    if (this.props.data && this.props.data.allPosts) {
      posts = this.props.data.allPosts.nodes;
    }
    const node = (
      <Rect>
        <Feed {...this.props} posts={posts} />
      </Rect>
    );

    return (
      <Rect>
        <Header {...this.props} />
        {posts.length > 0 ? node : null}
        <Footer />
      </Rect>
    );
  }
}

Home.defaultProps = {
  posts: [],
};

Home.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.numberd,
    created: PropTypes.number,
    public: PropTypes.bool,
    title: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
  })),
};
