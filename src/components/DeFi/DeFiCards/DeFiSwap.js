// import logo from './logo.svg';
// import './App.css';
// import './DeFiCards.css';
import React from 'react';
import {
  pumpFarm,
  addLiquidity,
  test,
  swap,
  swapAndLiquidity,
  checkMetaMaskConnection,
  swapWithInput,
} from '../uniswap';
import SimpleCard from '../FarmObjects/SimpleCard';
import FarmingStats from '../FarmObjects/FarmingStats';

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

class DeFiSwap extends React.Component {
  state = {
    amount: 0,
    swapHash: '',
  };
  componentDidMount() {
    checkMetaMaskConnection();
  }

  amountInputHandler = e => {
    this.setState({ amount: e.target.value });
  };

  swap = async () => {
    let hash = await swapWithInput(this.state.amount);
    this.setState({
      amount: 0,
      swapHash: hash,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="content">
          <SimpleCard
            path={cardInfo.swap.path}
            description={cardInfo.swap.description}
            provideLiquidity={false}
            functionLetter="a"
          />

          <br></br>
        </div>
      </div>
    );
  }
}

export default DeFiSwap;
