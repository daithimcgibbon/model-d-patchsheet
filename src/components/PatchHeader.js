import React, { Component } from 'react'

class PatchHeader extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-4">
            <h3>Model D Patch Sheet</h3>
          </div>
          <div class="col-4">

          </div>
          <div class="col-4">
            Patch Number <input type="text" class="border border-dark"/>
          </div>
        </div>
      </div>
    )
  }
}

export default PatchHeader
