import React from 'react';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';

const Rect = styled.div`
  margin: 0 auto;
  width: 650px;
`;

const About = (props) => {
  let node;
  if (props.data.pageById) {
    node = (
      <Rect>
        <Post
          content={props.data.pageById.content}
          summary={false}
          title={props.data.pageById.title}
        />
      </Rect>
    );
  }

  return (
    <div>
      <Header {...props} />
        {node}
      <Footer />
    </div>
  );
};

export default compose(
  connect(
    state => state,
  ),
  graphql(gql`
    query {
      pageById(id: 0) {
        title
        content
      }
    }
  `),
)(About);
