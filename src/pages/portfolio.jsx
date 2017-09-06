import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const Header = styled.h2`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  margin: 10px 0;
`;

const Shot = styled.img`
  display: block;
  max-width: 200px;
`;

const ShotAnchor = styled.a`
  background-color: #000;
  display: block;
  width: 100%;
  height: 100%;
  border: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  img {
    transition: all 300ms ease;
  }
  &:hover {
    border: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    img {
      opacity: .75;
    }
  }
`;

const ShotContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  max-width: 800px;
`;

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
    console.log(shots);

    return (
      <Container>
        <div>
          <Header>2017</Header>
        </div>

        <div>
          <Header>2016</Header>
        </div>

        <div>
          <Header>Dribbble</Header>
          <ShotContainer>
            {shots.map(shot => (
              <div key={shot.id}>
                <ShotAnchor href={shot.html_url}>
                  <Shot
                    src={shot.images.hidpi}
                    target="_blank"
                  />
                </ShotAnchor>
              </div>
            ))}
          </ShotContainer>
        </div>
      </Container>
    );
  }
};
