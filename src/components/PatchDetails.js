import React, { Component } from 'react'

class PatchDetails extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-3 border-left border-top border-dark p-2">
            DATE: <input type="text" class="border-0"/>
          </div>
          <div class="col-3 border-left border-top border-dark p-2">
            AUTHOR: <input type="text" class="border-0"/>
          </div>
          <div class="col-6 border-left border-top border-right border-dark p-2">
            TITLE: <input type="text" size="50" class="border-0"/>
          </div>
        </div>
        <div class="row border border-dark">
          <div class="col-12">
            NOTES: <br/><textarea rows="2" cols="120" class="border-0"/>
          </div>
        </div>
      </div>
    )
  }
}

export default PatchDetails
