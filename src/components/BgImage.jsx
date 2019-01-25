import * as React from 'react'
import {Component, createRef} from 'react'

export class BgImage extends Component {
  constructor(props) {
    super(props)

    this.el = createRef()
  }

  componentDidMount() {
    let {src} = this.props
    let image = new Image()

    image.onload = () => {
      if (this.el.current) {
        this.el.current.style.backgroundImage = `url(${src})`
        this.el.current.style.opacity = 1
      }
    }

    image.src = src
  }

  render() {
    return (
      <div className="image" ref={this.el}/>
    )
  }
}
