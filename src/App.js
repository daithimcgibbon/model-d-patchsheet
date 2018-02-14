import React, { Component } from 'react'
import PatchHeader from './components/PatchHeader'
import PatchDetails from './components/PatchDetails'
import ModelD from './components/ModelD'

class App extends Component {
  render() {
    return (
      <div class="container-fluid p-2">
        <PatchHeader/>
        <PatchDetails/>
        <br/>
        <ModelD/>
      </div>
    )
  }
}

export default App
