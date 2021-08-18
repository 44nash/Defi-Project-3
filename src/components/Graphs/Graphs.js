import React, { Component } from "react";
import i9 from "../../images/classifier-performance.png";

import iclass from "../../images/classifier-performance.png";
import imlFeat from "../../images/ml-features.png";
import imlTarget1 from "../../images/ml-targets-1.png";
import imlTarget2 from "../../images/ml-targets-2.png";
import ti from "../../images/ti-adx-dis-raw.png";

import "./Graphs.css";
class Graphs extends Component {
  render() {
    return (
      <div className="main-area">
        <div className="main-area">
          <div class="row">
            <div class="column">
              <img src={iclass} />
              <img src={imlFeat} />
              <img src={imlTarget1} />
              <img src={imlTarget2} />
              <img src={ti} />
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
