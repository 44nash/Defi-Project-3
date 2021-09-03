import React, { Component } from 'react';
import './DeFi.css';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../wallet/connectors';
import Button from 'react-bootstrap/Button';

import { useState, useEffect } from 'react';

import Fortmatic from 'fortmatic';
import { ethers } from 'ethers';

import Web3 from 'web3';
import factoryABI from './factoryABI';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

// https://react-icons.github.io/react-icons
import { ImArrowRight } from 'react-icons/im';
import Alert from 'react-bootstrap/Alert';
import { render } from '@testing-library/react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import {
  pumpFarm,
  addLiquidity,
  test,
  swap,
  swapAndLiquidity,
  checkMetaMaskConnection,
  swapWithInput,
} from './uniswap';
import SimpleCard from './FarmObjects/SimpleCard';
import FarmingStats from './FarmObjects/FarmingStats';

import DeFiSwap from './DeFiCards/DeFiSwap';
import DeFiLiquidity from './DeFiCards/DeFiLiquidity';
import DeFiYieldFarm from './DeFiCards/DeFiYieldFarm';

const cardInfo = {
  swap: {
    path: 'Simple Swap',
    description: 'Swap Ether for UNI',
  },
  swapLiq: {
    path: 'Swap | Provide Liquidity',
    description:
      'Swap Ether for UNI then provide liquidity to UNI/WETH liquidity pool.',
  },
  swapLiqFarm: {
    path: 'Swap | Provide Liquidity | Yield Farm',
    description:
      'Swap Ether for UNI, provide liquidity to UNI/WETH liquidity pool, then use LP Tokens to Yield Farm PumpToken  ',
  },
};

// https://shmoji.medium.com/web3-react-connect-users-to-metamask-or-any-wallet-from-your-frontend-241fd538ed39
export default function DeFi(props) {
  // Tutorial
  // https://medium.com/@clashofcoins/how-to-fetch-eth-balance-in-react-with-hooks-89e48ed6e842

  // https://dashboard.fortmatic.com
  // const fm = new Fortmatic('pk_live_7450BD27E0F9931C', 'rinkeby');
  // const fm = new Fortmatic('pk_live_7450BD27E0F9931C', 'ropsten');
  // const fm = new Fortmatic('pk_live_7450BD27E0F9931C', 'kovan');

  // state = {
  //   amount: 0,
  //   swapHash: '',
  // };
  // const [state, setState] = useState({
  //   amount: 0,
  //   swapHash: '',
  // });

  // componentDidMount() {
  //   checkMetaMaskConnection()
  // }
  // useEffect(() => {
  //   // Your code here
  //   checkMetaMaskConnection();
  // }, []);

  // amountInputHandler = e => {
  //   this.setState({ amount: e.target.value });
  // };

  // swap = async () => {
  //   let hash = await swapWithInput(this.state.amount);
  //   this.setState({
  //     amount: 0,
  //     swapHash: hash,
  //   });
  // };

  //

  const [allState, setAllstate] = useState({
    swap: false,
    liquidity: false,
    yieldFarm: false,
  });

  const [showAlert, setShowAlert] = useState(true);
  const handleSwap = () => {
    setAllstate({ swap: !allState.swap, liquidity: false, yieldFarm: false });
    setShowAlert(allState.swap);
  };

  const handleLiquidity = () => {
    setAllstate({ swap: true, liquidity: true, yieldFarm: false });
    setShowAlert(false);
  };

  const handleYieldFarm = () => {
    setAllstate({ swap: true, liquidity: true, yieldFarm: true });
    setShowAlert(false);
  };

  const [showFarmingStats, setShowFarmingStats] = useState(true);

  const [submitted, setSubmitted] = useState(false);

  ///===========

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ///===========

  const [balance, setBalance] = useState(0);

  function startApp() {
    const Web3 = require('web3');

    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/v3/0b3f4d840073404794f22f60c1bc089c',
      ),
    );
    var factoryAddress = '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351';
    const factoryContract = new web3.eth.Contract(factoryABI, factoryAddress);
    // cryptoZombies = new web3js.eth.Contract(cryptoZombiesABI, address);

    var accountInterval = setInterval(function () {}, 100);

    // factoryContract.events.Transfer()

    const exchangeAddress = factoryContract.methods.getExchange('USDC');
    console.log(exchangeAddress);

    // cryptoZombies.events.Transfer({ filter: { _to: userAccount } })
    //   .on("data", function (event) {
    //     let data = event.returnValues;
    //     getZombiesByOwner(userAccount).then(displayZombies);
    //   }).on("error", console.error);
  }

  // https://infura.io/dashboard/ethereum
  function getBalance(address) {
    const Web3 = require('web3');

    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/0b3f4d840073404794f22f60c1bc089c',
      ),
    );

    web3.eth.getBalance(address, function (err, result) {
      if (err) {
        console.log(err);
        setBalance(0);
      } else {
        console.log(web3.utils.fromWei(result, 'ether') + ' ETH');
        setBalance(web3.utils.fromWei(result, 'ether'));

        const uid = props.firebase.auth().currentUser.uid;
        const db = props.firebase.firestore();
        const userRef = db.collection('users').doc(uid);
        userRef.update({
          currentAddress: account,
          addressUsed: props.firebase.firestore.FieldValue.arrayUnion(account),
        });
      }
    });
  }

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  function log(param) {
    console.log(param);
  }

  function test() {
    this.web3.eth.getBalance(this.account, (err, balance) => {
      this.balance_2 = this.web3.fromWei(balance, 'ether') + ' ETH';
      return this.balance_2;
    });
  }

  return (
    <div className="main-area">
      <h1>Hello from DeFi </h1>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center main-area">
        {/* <p>Your Ethereum address:{props.addr}</p> */}
        <Button
          variant="primary"
          onClick={connect}
          className="connection-button"
        >
          Connect to MetaMask
        </Button>
        <br />
        <br />
        <br />
        {/*  Picking: Swap Liquid  or Farm */}
        {/* <div>
          <br /> */}
        {/* checked={!!allState.swap} */}
        {/* <Button
            className="arrow-button"
            variant={allState.swap ? 'success' : 'info'}
            onClick={handleSwap}
          >
            <ImArrowRight className="rightArrow" />
            <span> Swap </span>
          </Button>
          <br />
          <br />

          <Button
            variant={allState.liquidity ? 'success' : 'info'}
            onClick={handleLiquidity}
          >
            <ImArrowRight className="rightArrow" />
            <span> Add liquidity only, (no farming) </span>
          </Button>
          <br />
          <br />
          <Button
            variant={allState.yieldFarm ? 'success' : 'info'}
            onClick={handleYieldFarm}
          >
            <ImArrowRight className="rightArrow" />
            <span> Yield Farm PUMP </span>
          </Button>
          <br />
          <br />
          <Button variant="info" onClick={handleShow}>
            SUBMIT
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title> Ready ???</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are these the one's you choose ?
              <InputGroup>
                <InputGroup.Radio
                  value={allState.swap}
                  aria-label="Radio button for following text input"
                  checked={!!allState.swap}
                  name="swap"
                />
                <label for="swap" style={{ paddingLeft: '10px' }}>
                  {' '}
                  Swap{' '}
                </label>
                <br></br>
              </InputGroup>
              <InputGroup>
                <InputGroup.Radio
                  value={allState.liquidity}
                  aria-label="Radio button for following text input"
                  checked={!!allState.liquidity}
                />
                <label for="swap" style={{ paddingLeft: '10px' }}>
                  Liquidity
                </label>
              </InputGroup>
              <InputGroup>
                <InputGroup.Radio
                  value={allState.yieldFarm}
                  aria-label="Radio button for following text input"
                  checked={!!allState.yieldFarm}
                />
                <label for="swap" style={{ paddingLeft: '10px' }}>
                  Yield-Farm
                </label>
              </InputGroup> */}
        {/* <p> {JSON.stringify(allState)} </p> */}
        {/* </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button> */}
        {/* onClick={handleDefiOptions} */}
        {/* <Button
                variant="primary"
                onClick={() => {
                  setSubmitted(true);
                  handleClose();
                }}
              >
                Final Submit
              </Button>
              {showAlert ? (
                <Alert
                  variant="danger"
                  onClose={() => setShow(false)}
                  dismissible
                >
                  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                  <p>
                    Go back. Make sure you are connected and that you have
                    choose a selected service please. :)
                  </p>
                </Alert>
              ) : (
                <div></div>
              )}
            </Modal.Footer>
          </Modal>
          <br />
        </div>
        <br />
        <br /> */}
        {/* The actual swaping */}
        {/* {submitted ? (
          <div>
            <div className="content">
              {allState.swap === true &&
              allState.liquidity === false &&
              allState.yieldFarm === false ? (
                <DeFiSwap />
              ) : (
                <div></div>
              )}
              {allState.swap === true &&
              allState.liquidity === true &&
              allState.yieldFarm === false ? (
                <DeFiLiquidity />
              ) : (
                <div></div>
              )}

              {allState.swap &&
              allState.liquidity &&
              allState.yieldFarm === true ? (
                <DeFiYieldFarm />
              ) : (
                <div></div>
              )}
            </div>

            <br></br>
          </div>
        ) : (
          <div>Please submit you optins for automated defi</div>
        )}
        <br /> */}
        {/* <p> {JSON.stringify(allState)} </p> */}

        <Button
          variant="danger"
          onClick={disconnect}
          className="connection-button"
        >
          Disconnect
        </Button>
        <br />
        <br />
        {active ? (
          <span>
            Connected with <b>{account}</b>
            <br />
            Account balance{startApp()}
            <b>{account ? getBalance(account) : 'PLease connect'}</b>
            <b>{balance}</b>
          </span>
        ) : (
          <span>Not connected</span>
        )}
        {/* <ImArrowRight />
        <ImArrowRight /> */}
        <br />
        <br />
        <div>Please submit you optins for automated defi</div>
        <br />
        <br />
        <Tabs
          defaultActiveKey="swap"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="swap" title="Swap">
            <div>
              <DeFiSwap />
            </div>
          </Tab>
          <Tab eventKey="liquidity" title="Liquidity">
            <div>
              <DeFiLiquidity />
            </div>
          </Tab>
          <Tab eventKey="yieldFarm" title="YieldFarm">
            <div>
              <DeFiYieldFarm />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
