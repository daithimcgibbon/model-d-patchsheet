import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import circle from './circle'

export default class Knob extends React.Component {

    componentDidMount() {
      this.updateCanvas()
    }

    componentDidUpdate() {
      this.updateCanvas()
    }

    updateCanvas() {
      const context = this.refs.canvas.getContext('2d')
      context.translate(5, 5)
      context.scale(0.5, 0.5)
      circle({context, radius: 50, sAngle: 0, fillColor: '#000000', lineWidth: 1})
      circle({context, radius: 45, sAngle: 0, fillColor: '#FFFFFF', lineWidth: 1})
    }

    render() {
        return (
          <canvas ref="canvas" width={100} height={100} />
        )
    }
}
