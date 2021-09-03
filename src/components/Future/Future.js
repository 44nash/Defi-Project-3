import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Future';

class Future extends Component {
  render() {
    return (
      <div className="main-area">
        <div className="main-area">
          <h1>Future Plans </h1>

          <ListGroup>
            <ListGroup.Item>
              {' '}
              -Integrate unstaking and withdraw yield function from the solidity
              yield farm contract into code.
            </ListGroup.Item>
            <ListGroup.Item>
              {' '}
              -Integrate incentive game “lottery” to encourage participation in
              yield platform and use of Pump token
            </ListGroup.Item>
            <ListGroup.Item>
              -Add more pathways for different uniswap pairs, liquidity pools,
              and incorporate true cross defi protocol functionality, while
              keeping a simple user interface
            </ListGroup.Item>
            <ListGroup.Item>
              {' '}
              -Upgrade Pump token to integrate a full governance system, where
              pump tokens will equal voting share in determining the direction
              of platform as a way to incentivize use of Pump token
            </ListGroup.Item>
            <ListGroup.Item>
              -Optimize platform based on user feedback 4:11
            </ListGroup.Item>
            <ListGroup.Item>
              {' '}
              -Potentially look into expanding platform to aggregate different
              defi protocols and find the deals in defi and identify arbitrage
              opportunities
            </ListGroup.Item>
          </ListGroup>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Future;
