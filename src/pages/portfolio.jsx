import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: [],
    };
  }

  componentWillMount() {
    const token = process.env.REACT_APP_DRIBBBLE_CLIENT_TOKEN;
    const url = `https://api.dribbble.com/v1/users/557420/shots`;
    const config = {
      'method': 'GET',
      'headers': {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    };
    const fetchShots = async () => {
      return await fetch(url, config)
        .then(res => res.json())
        .then(res => {
          this.setState({
            shots: res,
          });
        })
        .catch(err => console.error(err));
    };
    fetchShots();
  }

  render() {
    const { shots } = this.state;

    return (
      <div>
        <h1>Dribbble</h1>
        <div>
          {shots.map(shot => (
            <div key={shot.id}>
              <a href={shot.html_url}>
                <img src={shot.images.teaser} />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
