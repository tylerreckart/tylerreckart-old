import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

const Single = (props) => {
  const {
    //body,
    className,
    title,
  } = props;

  const Styles = StyleSheet.create({
    p:{
      fontWeight: 300,
      margin: '0 0 1em 0',
      fontSize: '16px',
      lineHeight: '1.75em',
      maxWidth: '650px',
    },
    lastP: {
      margin: 0,
    },
    title: {
      color: '#414EF9',
      fontSize: '24px',
      fontWeight: 200,
      letterSpacing: '0.05em',
      maxWidth: '650px',
      margin: '0 0 1em 0',
    },
  });

  return (
    <div className={className}>
      <div>
        <h2 className={css(Styles.title)}>{title}</h2>

        <p className={css(Styles.p)}>Hi! I'm Tyler Reckart. I'm a <a href="https://github.com/tylerreckart" target="_blank">Software Engineer</a>, occasional <a href="https://dribbble.com/tylerreckart" target="_blank">designer</a>, overly passionate comic book collector, and mechanical watch enthusiast. Most of my work is concerned with frontend architechture, and I primarily program in JavaScript because of that. On the side, I like to tinker with language parsing in Haskell.</p>
        <p className={css(Styles.p)}>I've worked with agencies, as a freelancer and with a number of startups. Notably, <a href="http://qui.lt" target="_blank">Quilt</a>, <a href="http://tiphive.com/" target="_blank">TipHive</a>, and most recently <a href="https://boomtownroi.com/" target="_blank">BoomTown</a>, where I am building software that helps top real estate brokerages aquire leads and close more deals.</p>
        <p className={css(Styles.p, Styles.lastP)}>If you'd like to contact me, I can be reached at tyler(at)tylerreckart.com, and on <a href="https://twitter.com/tylerreckart" target="_blank">Twitter</a>. Here's my <a href="./static/reckart.asc" download>PGP public key</a>.</p>
      </div>
    </div>
  );
};

Single.propTypes = {
  //body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Single;