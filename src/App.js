import React, { Component } from 'react'
import PatchHeader from './components/PatchHeader'
import PatchDetails from './components/PatchDetails'

class App extends Component {
  render() {
    return (
      <div class="container p-2">
        <div class="row p-4">
          <div class="col">
            <PatchHeader/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <PatchDetails/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
