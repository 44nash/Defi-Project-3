import logo from '../../logo.svg';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Row, Col, Card, CardGroup, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
  return (
    <div className="main-area">
      <div className="cards-area main-area">
        <h1> Project 3: DeFi-Building-Blocks </h1>
        <h2 style={{ paddingTop: '15px' }}>Team Members</h2>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/43914274?v=4"
            />
            <Card.Body>
              <Card.Title>Marcus</Card.Title>
              <Card.Text>
                Used React.js and Bootstrap for the frontend and design. The
                backend uses Firebase, and Solidity Smart contracts on the
                Rinkeby Test network
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer </small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/18093061?v=4"
            />

            <Card.Body>
              <Card.Title>Derrick Claye</Card.Title>
              <Card.Text>Uniswap V2 Router and Pump Farm integration</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/77021656?v=4"
            />
            <Card.Body>
              <Card.Title>Jeremy Seidman</Card.Title>
              <Card.Text>
                Hands on in all overall concepts and Order of Operations
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer </small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          {/*  */}
          <Card>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/40152804?v=4"
            />
            <Card.Body>
              <Card.Title>Kamil Wojnowski</Card.Title>
              <Card.Text>
                Worked on the yield farm and created the ERC20 token for this
                project.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer </small>
            </Card.Footer>
          </Card>

          {/*  */}
          <Card>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/70281394?v=4"
            />
            <Card.Body>
              <Card.Title>Rikin Patel</Card.Title>
              <Card.Text>
                I worked on developing our two smart contracts using truffle,
                writing test coverage for the smart contracts, and deploying
                them to the Rinkeby Testnet.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer </small>
            </Card.Footer>
          </Card>
          {/*  */}
          <Card>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/13008330?v=4"
            />
            <Card.Body>
              <Card.Title>Shaunjay Brown</Card.Title>
              <Card.Text>
                Solidity smart contract for the lottery for user and firestore
                intergration
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      <div className="main-area">
        <h2> Introduction</h2>
        <p> 01 - Inline Metamask integration</p>
        <p>04 Withdrawing LP and harvesting earned PUMP</p>
        <p>
          {' '}
          02 Optional direct pathways for: Swap only (currently hardcoded
          ETH/UNI) Provide liquidity (LP) using single sided currency input
          (currently hardcoded ETH) Yield farm PUMP token using single sided
          currency input (currently hardcoded ETH)
        </p>
        <p> 03 Harvest earned PUMP without withdrawing LP </p>
        <p> 04 Withdrawing LP and harvesting earned PUMP </p>

        <p>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
          of type and scrambled it to make a type specimen book it has?
        </p>
        <p>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
          of type and scrambled it to make a type specimen book it has?
          <a href="https://alpaca.markets/docs/api-documentation/how-to/market-data/">
            Alpaca
          </a>
          and
          <a href="https://docs.kraken.com/rest/#operation/getOHLCData">
            Kraken APIs
          </a>
          .
          <a href="https://www.ig.com/us/trading-strategies/10-trading-indicators-every-trader-should-know-190604">
            Technical indicators
          </a>{' '}
          will be constructed from the input OHLCV data and transformed into
          machine-learning features using a
          <a href="https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html">
            sklearn.pipeline.Pipeline
          </a>
          . Output/Target variables for the machine-learning algorithms will
          consist of 1-day, 5-day, and 10-day returns, for example.
          <a href="https://scikit-learn.org/stable/modules/ensemble.html">
            Ensemble methods
          </a>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
          of type and scrambled it to make a type specimen book it has?
          <a className="" href="https://finnhub.io/docs/api/news-sentiment">
            sentiment analysis from FinnHub
          </a>
          into the algorithmic-trading system.
        </p>
      </div>

      <div className="main-area">
        {/* <h2>Technical Indicators</h2> */}
        {/* <ListGroup>
          <ListGroup.Item

            className="list_link"
            action
            href="https://www.investopedia.com/terms/s/sma.asp"
          >
            Simple Moving Average
          </ListGroup.Item>
          <ListGroup.Item
            className="list_link"
            action
            href="https://www.investopedia.com/terms/e/ema.asp"
          >
            Exponential Moving Average
          </ListGroup.Item>
          <ListGroup.Item
            className="list_link"
            action
            href="https://www.investopedia.com/terms/d/double-exponential-moving-average.asp"
          >
            Double Exponential Moving Average
          </ListGroup.Item>
          <ListGroup.Item
            className="list_link"
            action
            href="https://www.investopedia.com/terms/t/triple-exponential-moving-average.asp"
          >
            Triple Exponential Moving Average
          </ListGroup.Item>
        </ListGroup> */}
        <h2 style={{ paddingTop: '25px' }}>References</h2>
        <ListGroup>
          <ListGroup.Item
            className="list_link"
            action
            href="https://www.ig.com/us/trading-strategies/10-trading-indicators-every-trader-should-know-190604"
          >
            10 Trading Indicators Every Trader Should Know
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default Home;
