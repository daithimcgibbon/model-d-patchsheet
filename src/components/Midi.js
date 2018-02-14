import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import Knob from 'react-canvas-knob'

class Midi extends Component {
  render() {
    return (
      <div className="container border border-dark rounded h-25">

        <div className="row">
          <div className="col-4 text-center">
            <FontAwesome name="usb"/>
          </div>
          <div className="col-4 text-center small">
            <span className="small align-text-bottom">IN</span>
          </div>
          <div className="col-4 text-center small">
            <span className="small align-text-bottom">THRU</span>
          </div>
        </div>

        <div className="row">
          <div className="col-4 text-center">
            <Knob width={20} fgColor={'#000'}/>
          </div>
          <div className="col-4 text-center">
            <Knob width={20} fgColor={'#000'}/>
          </div>
          <div className="col-4 text-center">
            <Knob width={20} fgColor={'#000'}/>
          </div>
        </div>

      </div>
    )
  }
}

export default Midi
