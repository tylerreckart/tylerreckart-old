import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Modal = (props) => {
  const {
    body,
    isModalActive,
  } = props;

  const Styles = StyleSheet.create({
    modal: {
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      backgroundColor: '#504DFA',
      padding: '.75em 1em',
      margin: '0 0 1em 0',
      borderRadius: '6px',
    },
    modalActive: {
      display: 'block',
    },
    modalHidden: {
      display: 'none',
    },
    body: {
      color: '#ffffff',
      margin: 0,
      lineHeight: '1.5em',
      fontWeight: 300,
    }
  });

  console.log(props);

  return (
    <div className={css(Styles.modal, isModalActive === true ? Styles.modalActive : Styles.modalHidden)}>
      <p className={css(Styles.body)}>{body}</p>
    </div>
  );
};

export default Modal;