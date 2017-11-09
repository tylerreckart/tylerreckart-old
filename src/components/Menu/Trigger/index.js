import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Trigger = (props) => (
  <div className={css(Styles.pullOutMenuTrigger)} onClick={() => props.toggleMenu()}>
    <div className={css(Styles.trigger, props.isMenuActive ? Styles.triggerClicked : null)}>

      <span className={css(Styles.bar, props.isMenuActive ? Styles.topBarActive : null)} />
      <span className={css(Styles.bar, Styles.middle, props.isMenuActive ? Styles.middleBarActive : null)}/>
      <span className={css(Styles.bar, props.isMenuActive ? Styles.bottomBarActive : null)}/>

    </div>
  </div>
);

const Styles = StyleSheet.create({
  pullOutMenuTrigger: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    height: '32px',
    justifyContent: 'center',
    transition: 'all 200ms ease',
    width: '32px',
    ':hover': {
      boxShadow: '0 3px 6px rgba(0,0,0,.25)',
    }
  },
  trigger: {
    position: 'relative',
    transition: 'all 200ms ease',
  },
  triggerClicked: {
    top: '1px',
    transform: 'rotate(180deg)',
  },
  bar: {
    backgroundColor: '#ffffff',
    display: 'block',
    height: '1px',
    position: 'relative',
    transition: 'all 200ms ease',
    width: '16px',
  },
  middle: {
    margin: '3px 0',
  },
  topBarActive: {
    top: '1px',
    transform: 'rotate(-45deg)',
  },
  middleBarActive: {
    display: 'none',
    margin: 0,
  },
  bottomBarActive: {
    top: 0,
    transform: 'rotate(45deg)',
  }
});

export default Trigger;