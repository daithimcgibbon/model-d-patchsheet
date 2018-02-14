import React, { Component } from 'react'
import Midi from './Midi'
import Controllers from './Controllers'
import OscillatorBank from './OscillatorBank'
import Mixer from './Mixer'
import Modifiers from './Modifiers'
import Output from './Output'
import Style from '../css/style.css'

class ModelD extends Component {
  render() {
    return (
      <div className="container-fluid border border-dark p-2">
        <div class="row">
          <div class="col-2 ">
            <Midi/>
            <Controllers/>
          </div>
          <div class="col-3 nopadding">
            <OscillatorBank/>
          </div>
          <div class="col-3">
            <Mixer/>
          </div>
          <div class="col-3 nopadding">
            <Modifiers/>
          </div>
          <div class="col-1">
            <Output/>
          </div>
        </div>
      </div>
    )
  }
}

export default ModelD
