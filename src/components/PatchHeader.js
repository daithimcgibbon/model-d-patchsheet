import React, { Component } from 'react'

class PatchHeader extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <h3>Model D Patch Sheet</h3>
          </div>
          <div className="col-4">

          </div>
          <div className="col-4">
            Patch Number <input type="text" className="border border-dark"/>
          </div>
        </div>
      </div>
    )
  }
}

export default PatchHeader
