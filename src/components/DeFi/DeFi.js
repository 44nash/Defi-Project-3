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

// https://shmoji.medium.com/web3-react-connect-users-to-metamask-or-any-wallet-from-your-frontend-241fd538ed39
export default function DeFi(props) {
  // Tutorial
  // https://medium.com/@clashofcoins/how-to-fetch-eth-balance-in-react-with-hooks-89e48ed6e842

  // https://dashboard.fortmatic.com
  // const fm = new Fortmatic('pk_live_7450BD27E0F9931C', 'rinkeby');
  // const fm = new Fortmatic('pk_live_7450BD27E0F9931C', 'ropsten');
  // const fm = new Fortmatic('pk_live_7450BD27E0F9931C', 'kovan');

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

    //factoryContract.events.Transfer()

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
        'https://ropsten.infura.io/v3/0b3f4d840073404794f22f60c1bc089c',
      ),
    );

    web3.eth.getBalance(address, function (err, result) {
      if (err) {
        console.log(err);

        setBalance(0);
      } else {
        console.log(web3.utils.fromWei(result, 'ether') + ' ETH');
        setBalance(web3.utils.fromWei(result, 'ether'));
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
      </div>
    </div>
  );
}
