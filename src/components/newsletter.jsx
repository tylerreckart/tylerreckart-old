import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import Modal from './modal';

export default class NewsletterSignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <div className={css(Styles.container)}>
          <div className={css(Styles.content)}>
            <p className={css(Styles.masthead)}>Liked the article? Subscribe below to get an email when new articles come out! Also, follow <a href="https://twitter.com/tylerreckart" target="_blank">@tylerreckart</a> on Twitter.</p>
            <em className={css(Styles.disclaimer)}>One click unsubscribe, any time.</em>
            <form className={css(Styles.form)} action="//tylerreckart.us15.list-manage.com/subscribe/post?u=f93b21394164ca036eb1b96d7&amp;id=8b9fc4931a" method="post">
              <input className={css(Styles.input)} type="email" onChange={this.handleChange} value={value} name="EMAIL" id="mce-EMAIL" placeholder="example@tylerreckart.com" />
              <input className={css(Styles.submit)} type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const Styles = StyleSheet.create({
    link: {
      borderBottom: '1px solid rgba(0,0,0,0)',
      color: '#414EF9',
      textDecoration: 'none',
      ':hover': {
        color: '#0011F8',
        borderBottom: '1px solid #0011F8'
      },
    },
    container: {
      backgroundColor: '#ffffff',
      border: '1px solid #E6E8EB',
      borderRadius: '6px',
      boxShadow: '0 0 2px rgba(0,0,0,.05)',
      margin: '3em 0 0 0',
      maxWidth: '650px',
    },
    content: {
      padding: '1.5em',
    },
    input: {
      border: '1px solid #E6E8EB',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '300',
      boxSizing: 'border-box',
      margin: '0 .5em 0 0',
      width: '100%',
      outline: 'none',
      padding: '1em',
      flexGrow: 1,
      ':focus': {
          border: '1px solid #414EF9',
          boxShadow: '0 0 2px rgba(65,78,249,.20)',
      },
      '::placeholder': {
          color: '#74808E',
      },
      '@media (max-width: 700px)': {
        margin: 0,
      },
    },
    submit: {
      cursor: 'pointer',
      backgroundColor: '#414EF9',
      border: 'none',
      borderRadius: '6px',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: '400',
      padding: '1em 1.5em',
      ':hover': {
          backgroundColor: '#0011F8',
          boxShadow: '0 0 2px rgba(65,78,249,.20)',
      },
      '@media (max-width: 700px)': {
        marginTop: '1em',
        display: 'block',
        width: '100%',
      }
    },
    masthead: {
      fontSize: '16px',
      fontWeight: '300',
      lineHeight: '1.5em',
      marginBottom: '1em',
    },
    disclaimer: {
      display: 'block',
      fontSize: '12px',
      fontStyle: 'italic',
      fontWeight: '300',
      marginBottom: '0.75em',
    },
    form: {
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'row',
      '@media (max-width: 700px)': {
        flexDirection: 'column',
      },
    }
  });
  