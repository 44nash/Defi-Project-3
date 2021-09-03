import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Row, Col, Card, CardGroup, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Week_1 from './components/week_1/Week_1';
import Week_2 from './components/week_2/Week_2';
import { Link } from 'react-router-dom';
import Dev_M from './components/Developers/Dev-M/Dev_M';
import Dev_N from './components/Developers/Dev-N/Dev_N';
import Dev_E from './components/Developers/Dev-E/Dev_E';
import Dev_B from './components/Developers/Dev-B/Dev_B';
import Graphs from './components/Graphs/Graphs';
// import Future from './components/Future/Future';

import Defi from './components/DeFi/DeFi';

import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

import firebase from 'firebase/app'; // <---- This must be first
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

import {
  FirebaseAuthConsumer,
  FirebaseAuthProvider,
} from '@react-firebase/auth';
import { FirestoreProvider } from '@react-firebase/firestore';

import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import SwipeableViews from 'react-swipeable-views';

import { Signup } from './components/Signup/Signup';
import { Login } from './components/Login/Login';
import { useHistory } from 'react-router-dom';
import Future from './components/Future/Future';

// // https://www.npmjs.com/package/web3-react
// import Web3Provider from 'web3-react';

// // https://www.npmjs.com/package/web3-react
// import { Connectors } from 'web3-react';
// const { InjectedConnector, NetworkOnlyConnector } = Connectors

// const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })

// const Infura = new NetworkOnlyConnector({
//   providerURL: 'https://mainnet.infura.io/v3/...'
// })

// const connectors = { MetaMask, Infura }

function getLibrary(provider) {
  return new Web3(provider);
}

// https://react-bootstrap.netlify.app/components/dropdowns/#menu-headers

const Main = props => {
  const history = useHistory();

  function handleHistory() {
    //props.history.push('/');
    firebase.auth().signOut().then();
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ethereum = window.ethereum;

  const [addr, setAddr] = useState('');

  if (ethereum) {
    ethereum.on('accountsChanged', function (accounts) {
      // Time to reload your interface with accounts[0]!
      console.log(accounts[0]);
      setAddr(accounts[0]);
    });
  }

  // if (typeof ethereum !== 'undefined') {
  //   console.log('MetaMask is installed!');
  // }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <div className="App">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Decentralized Finance</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#pricing"></Nav.Link>
                  <NavDropdown title="Developers" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/dev-m">
                      Marcus Info
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dev-n">
                      Kamil Wojnowski --N
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dev-b">
                      Rikin Patel --B
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dev-e">
                      Jeremy Seidman --E
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dev-e">
                      Derrick Claye
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dev-e">
                      Shaunjay Brown
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Weeks" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/week-1">Week # 1</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/week-2">Week # 2</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="/photos">Photos</Nav.Link>
                  <Nav.Link href="/future">Future Plans</Nav.Link>
                  <Nav.Link href="/defi">Defi</Nav.Link>
                </Nav>
                <Button onClick={handleShow}>LogOut</Button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>LogOut</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Loging out are you sure??</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" href="/" onClick={handleHistory}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* ========= ALL Routes ========= */}
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/week-1">
                <Week_1 />
              </Route>
              <Route exact path="/week-2">
                <Week_2 />
              </Route>

              <Route exact path="/dev-m">
                <Dev_M />
              </Route>

              <Route exact path="/dev-n">
                <Dev_N />
              </Route>
              <Route exact path="/dev-b">
                <Dev_B />
              </Route>
              <Route exact path="/dev-e">
                <Dev_E />
              </Route>

              <Route exact path="/photos">
                <Graphs />
              </Route>
              <Route exact path="/future">
                <Future />
              </Route>

              <Route exact path="/defi">
                <Defi addr={addr} {...props.pageProps} firebase={firebase} />
              </Route>
            </Switch>
          </div>

          {/* footer */}
          <Navbar
            className="footer"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="https://github.com/kamilww/DeFi-Building-Blocks">
                Github Code (Click me)
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </Router>
    </Web3ReactProvider>
  );
};

const FrontPage = props => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  // const [open, setOpen] = React.useState(false);

  // const handleLoginClose = () => {
  //   setOpen(false);
  // };
  // const handleLoginToggle = () => {
  //   setOpen(!open);
  // };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ethereum = window.ethereum;

  const [addr, setAddr] = useState('');

  if (ethereum) {
    ethereum.on('accountsChanged', function (accounts) {
      // Time to reload your interface with accounts[0]!
      console.log(accounts[0]);
      setAddr(accounts[0]);
    });
  }

  // if (typeof ethereum !== 'undefined') {
  //   console.log('MetaMask is installed!');
  // }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <div className="App">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Decentralized Finance</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#pricing"></Nav.Link>
                  <NavDropdown title="Developers" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/dev-m">
                      Marcus Info
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dev-n">
                      Kamil Wojnowski
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dev-b">
                      Rikin Patel
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dev-e">
                      Jeremy Seidman
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dev-e">
                      Derrick Claye
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dev-e">
                      Shaunjay Brown
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Weeks" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/week-1">Week # 1</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/week-2">Week # 2</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  {/* <Nav.Link href="/graphs">Graphs</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Future Plans
                  </Nav.Link>
                  <Nav.Link href="/defi">Defi</Nav.Link> */}

                  <Button onClick={handleShow}>Login/Sign Up</Button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Body>
                      <div>
                        <Tabs
                          defaultActiveKey="login"
                          className="mb-3"
                          style={{ display: 'flex' }}
                        >
                          <Tab eventKey="login" title="LOGIN">
                            <Login />
                          </Tab>
                          <Tab eventKey="signup" title="SIGNUP">
                            <Signup />
                          </Tab>
                        </Tabs>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => firebase.auth().signInAnonymously()}
                      >
                        Try Anonymously
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* ========= ALL Routes ========= */}
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/week-1">
                <Week_1 />
              </Route>
              <Route exact path="/week-2">
                <Week_2 />
              </Route>
              <Route exact path="/dev-m">
                <Dev_M />
              </Route>

              <Route exact path="/dev-n">
                <Dev_N />
              </Route>
              <Route exact path="/dev-b">
                <Dev_B />
              </Route>
              <Route exact path="/dev-e">
                <Dev_E />
              </Route>
              {/* <Route exact path="/graphs">
                <Graphs />
              </Route>
              <Route exact path="/future"></Route>

              <Route exact path="/defi">
                <Defi addr={addr} {...props.pageProps} />
              </Route> */}
            </Switch>
          </div>

          {/* footer */}
          <Navbar
            className="footer"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="https://github.com/kamilww/DeFi-Building-Blocks">
                Github Code (Click me)
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </Router>
    </Web3ReactProvider>
  );
};

function App({ pageProps }) {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <FirestoreProvider {...firebaseConfig} firebase={firebase}>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            if (isSignedIn) {
              return <Main {...pageProps} firebase={firebase}></Main>;
            } else {
              return <FrontPage {...pageProps} />;
            }
          }}
        </FirebaseAuthConsumer>
      </FirestoreProvider>
    </FirebaseAuthProvider>
  );
}

export default App;
