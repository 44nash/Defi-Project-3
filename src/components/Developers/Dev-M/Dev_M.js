import React, { Component } from 'react';
import './Dev_M.css';
import {
  Row,
  Col,
  Card,
  CardGroup,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

class Dev_M extends Component {
  render() {
    return (
      <div className="main-area">
        <Card className="cards-area">
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/43914274?v=4"
          />
          <Card.Body>
            <Card.Title>Marcus Nash</Card.Title>
            <Card.Text>
              <p>
                The start of this was to work on indicators. Indicators where
                learned to make trading strategies. I went to checkout the the
                Stochastic Oscillator, and Ichimoku cloud. Both told info on
                price moments but their a different straggles to using both of
                them. For the stochastic one you could trade off of signs or
                reversal or where the %K and %D cross,( K below D is a sell and
                above is a buy).
              </p>
              <p>
                Next was to work with the different prediction methods so we
                could get a prediction, use it with the indicators that would
                then give an answer as to what we should do with our simple bot.
              </p>
              <p>
                Our simple Bot is a class connected to Alpaca paper trading api.
                He will read an csv file at the beginning of the day and look
                for that price point during the day and buy or sell depending on
                the signal in the csv file with the target price. Once the day
                is over (4:01 pm) the bot will run through the info of the past
                couple days and todays closing price and make new prediction on
                what tomorrows price will be using the LR, ML, DL algorithms
                from I or Nathan. And with that information it will create a new
                csv file to look at for the next day and so on.
              </p>
            </Card.Text>
          </Card.Body>
          <h2>Tech</h2>
          <ListGroup className="list-group-flush">
            <ListGroupItem>React.js</ListGroupItem>
            <ListGroupItem>Solidity Smart </ListGroupItem>
            <ListGroupItem>Firebase</ListGroupItem>
            <ListGroupItem>Bootstrap</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://www.linkedin.com/in/marcus-nash-32a118148/">
              LinkedIn
            </Card.Link>
            <Card.Link href="https://github.com/44nash">GitHub</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Dev_M;
