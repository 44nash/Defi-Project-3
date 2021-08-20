import React, { Component } from 'react';
import './DeFi.css';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../wallet/connectors';
import Button from 'react-bootstrap/Button';

export default function DeFi(props) {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
    log(library);
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
          </span>
        ) : (
          <span>Not connected</span>
        )}
      </div>
    </div>
  );
}
