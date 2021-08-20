import React, { Component } from 'react';
import "./DeFi.css";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/connectors";

  

export default function DeFi(){
    
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    async function connect() {
      try {
        await activate(injected)
      } catch (ex) {
        console.log(ex)
      }
    }
  
    async function disconnect() {
      try {
        deactivate()
      } catch (ex) {
        console.log(ex)
      }
    }


    // shoot() {
    //     alert("Great Shot!");
    // }




    

    
    return (
        <div className="main-area">

            <h1>Hello from DeFi </h1>
            <br />
            <br />
            <div className="flex flex-col items-center justify-center">
                <button onClick={connect} className="">Connect to MetaMask</button>
                {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
                <button onClick={disconnect} className="">Disconnect</button>
            </div>

        </div>
    );
    
}

