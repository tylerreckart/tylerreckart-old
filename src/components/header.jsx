import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import Menu from './menu';

class Header extends Component {
    constructor(props) {
    super(props);

    this.state = {
      isMenuActive: false,
    };
  }

  toggleMenu() {
    if (this.state.isMenuActive === false) {
      this.setState({
        isMenuActive: true,
      });
    } else if (this.state.isMenuActive === true) {
      this.setState({
        isMenuActive: false,
      });
    }

    return;
  }

  render() {
    const {
      title,
    } = this.props;

    return (
      <div>
        <div className={css(Styles.header)}>
          <div className={css(Styles.menuItemWrapper)}>
            <div className={css(Styles.pullOutMenuTrigger)} onClick={() => this.toggleMenu()}>
              <div>
                <span className={css(Styles.crossBar, Styles.topBar)} />
                <span className={css(Styles.crossBar, Styles.middleBar)}/>
                <span className={css(Styles.crossBar, Styles.bottomBar)}/>
              </div>
            </div>
          </div>

          <Menu isMenuActive={this.state.isMenuActive} />

          <div className={css(Styles.itemWrapper)}>
            <div className={css(Styles.profileImg)} />
          </div>
        </div>
      </div>
    );
  }
}

const Styles = StyleSheet.create({
    anchor: {
      color: 'inherit',
      textDecoration: 'none',
    },
    header: {
      display: 'flex',
      flexDirection: 'row-reverse',
      flexWrap: 'nowrap',
      fontSize: '12px',
      justifyContent: 'space-between',
      position: 'fixed',
      width: '100%',
      top: '0',
      zIndex: '100',
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
      cursor: 'pointer',
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
      position: 'relative',
      zIndex: '0',
    },
    menuItemWrapper: {
      padding: '1.5em',
      position: 'relative',
      zIndex: 100,
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
  });

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect()(Header);
