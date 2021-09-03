import React, { Component } from 'react';
import i9 from '../../images/classifier-performance.png';

import iclass from '../../images/classifier-performance.png';
import imlFeat from '../../images/ml-features.png';
import imlTarget1 from '../../images/ml-targets-1.png';
import imlTarget2 from '../../images/ml-targets-2.png';
import ti from '../../images/ti-adx-dis-raw.png';

import jfn from '../../images/firestore_user.png';

import fbj from '../../images/PUMP_tokenomics.png';
import jsn from '../../images/project_addresses.png';
import fsn from '../../images/key_components.png';
import sen from '../../images/future_plans.png';
import sfm from '../../images/cover.png';

import './Graphs.css';
class Graphs extends Component {
  render() {
    return (
      <div className="main-area">
        <div className="main-area">
          <div class="row">
            <h1>Photos</h1>
            <div class="column">
              <img src={jfn} />
              <img src={fbj} />
              <img src={fsn} />
              <img src={jsn} />
              <img src={sen} />
            </div>
            {/* <div class="column">
              <img src={i9} />
              <img src={i9} />
              <img src={i9} />
              <img src={i9} />
              <img src={i9} />
            </div>
            <div class="column">
              <img src={i9} />
              <img src={i9} />
              <img src={i9} />
              <img src={i9} />
              <img src={i9} />
            </div>
            <div class="column">
              <img src={i9} />
              <img src={i9} />
              <img src={i9} />
              <img src={i9} />
              <img src={i9} />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Graphs;
