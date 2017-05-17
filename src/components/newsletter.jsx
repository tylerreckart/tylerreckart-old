import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { extended } from '../utils/componentUtils';

const NewsletterSignupForm = () => {
  const Styles = StyleSheet.create({
    globals: {
      '*a': {
        borderBottom: '1px solid rgba(0,0,0,0)',
        color: '#414EF9',
        textDecoration: 'none',
        ':hover': {
          'color': '#0011F8',
          borderBottom: '1px solid #0011F8'
        }
      },
    },
    container: {
      backgroundColor: '#ffffff',
      border: '1px solid #E6E8EB',
      borderRadius: '6px',
      boxShadow: '0 0 2px rgba(0,0,0,.05)',
      margin: '1em 0 0 0',
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
      margin: '0 .5em 0 0',
      outline: 'none',
      padding: '1em',
      width: '462px',
      ':focus': {
          border: '1px solid #414EF9',
          boxShadow: '0 0 2px rgba(65,78,249,.20)',
      },
      '::placeholder': {
          color: '#74808E',
      }
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
  });

  const signup = (email) => {
    const body = {
      "email_address": email,
      "status": "pending",
    };

    const config = {
      method: 'POST',
      user: `anystring:${process.env.REACT_APP_MAILCHIMP_API_KEY}`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    return fetch(process.env.REACT_APP_MAILCHIMP_API_URL, config)
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch(error => console.error(error))
    .done();
  };

  console.log(process.env);

  return (
    <div className={extended.css(Styles.container, Styles.globals)} action="//tylerreckart.us15.list-manage.com/subscribe/post?u=f93b21394164ca036eb1b96d7&amp;id=8b9fc4931a" method="post">
      <div className={css(Styles.content)}>
        <p className={css(Styles.masthead)}>Liked the article? Subscribe below to get an email when new articles come out! Also, follow <a href="https://twitter.com/tylerreckart" target="_blank">@tylerreckart</a> on Twitter.</p>
        <em className={css(Styles.disclaimer)}>One click unsubscribe, any time. <a href="#">Learn more</a>.</em>
        
        <input className={css(Styles.input)} type="email" placeholder="example@tylerreckart.com" />
        <input className={css(Styles.submit)} type="submit" value="Subscribe" onClick={() => signup('tyler.reckart@gmail.com')} />
      </div>
    </div>
  );
};

export default NewsletterSignupForm;