import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

const Header = (props) => {
  const {
    title,
  } = props;

  const Styles = StyleSheet.create({
    anchor: {
      color: 'inherit',
      textDecoration: 'none',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      fontSize: '12px',
      justifyContent: 'space-between',
      position: 'absolute',
      width: '100%',
    },
    hyperlink: {
      color: '#74808E',
      fontWeight: '300',
      listStyle: 'none',
      margin: '0 0 1em 0',
    },
    activeLink: {
      color: '#000000',
      fontWeight: '600',
    },
    siteName: {      color: 'inherit',
      textDecoration: 'none',
      fontWeight: '600',
    },
    pullOutMenuTrigger: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      width: '32px',
      height: '32px',
      backgroundColor: '#000000',
      borderRadius: '50%',
    },
    profileImg: {
      width: '32px',
      height: '32px',
      background: `url('https://pbs.twimg.com/profile_images/737021651683008512/5HO2-2qq.jpg')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: '50%',
    },
    itemWrapper: {
      padding: '1.5em',
    },
    crossBar: {
      display: 'block',
      width: '16px',
      height: '1px',
      backgroundColor: '#ffffff',
    },
    middleBar: {
      margin: '3px 0',
    },
    pullOutMenu: {
      position: 'absolute',
      padding: '1em',
    },
    nav: {
      backgroundColor: 'red',
      padding: '1em',
    }
  });

  return (
    <div>
      <div className={css(Styles.header)}>
        <div className={css(Styles.itemWrapper)}>
          <div className={css(Styles.profileImg)} />
        </div>

        <div className={css(Styles.itemWrapper)}>
          <div className={css(Styles.pullOutMenuTrigger)}>
            <div>
              <span className={css(Styles.crossBar, Styles.topBar)} />
              <span className={css(Styles.crossBar, Styles.middleBar)}/>
              <span className={css(Styles.crossBar, Styles.bottomBar)}/>
            </div>
          </div>
        </div>
      </div>

      {/*<div className={Styles.pullOutMenu}>
        <nav className={Styles.nav}>
          <li className={css(Styles.hyperlink , Styles.activeLink)}>
            <a className={css(Styles.anchor)} href="/">Journal</a>
          </li>
          <li className={css(Styles.hyperlink)}>
            <a className={css(Styles.anchor)} href="/about">About</a>
          </li>
          <li className={css(Styles.hyperlink)}>
            <a className={css(Styles.anchor)} href="https://twitter.com/tylerreckart" target="_blank">Twitter</a>
          </li>
          <li className={css(Styles.hyperlink)}>
            <a className={css(Styles.anchor)} href="https://github.com/tylerreckart" target="_blank">Github</a>
          </li>
        </nav>

        <div className={Styles.overlay} />
      </div>*/}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect()(Header);
