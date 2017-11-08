import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import Single from '../components/Single';

const About = () => {
    const Styles = StyleSheet.create({
    container: {
      marginTop: '100px',
      '@media (max-width: 700px)': {
        display: 'block',
        padding: '0 1.5em',
      }
    },
    contentWrapper: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '800px',
      margin: '0 auto',
    },
    post: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '900px',
    },
    leading: {
      marginBottom: '4em',
    },
    terminal: {
      marginBottom: 0,
    },
  });


  return (
    <div className={css(Styles.container)}>
      <div className={css(Styles.contentWrapper)}>
        <Single
          title="About"
        />
      </div>
    </div>
  );
};
export default About;
