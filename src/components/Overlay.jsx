import * as React from 'react'
import {Component, Fragment, createRef} from 'react'

export class Overlay extends Component {
  constructor(props) {
    super(props)

    this.wrapper = createRef()
    this.block = createRef()

    this.close = this.close.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onKeydown = this.onKeydown.bind(this)
  }

  componentDidMount() {
    window.document.body.classList.add('overlay-shown')
    document.addEventListener('click', this.onClick)
    document.addEventListener('keydown', this.onKeydown)
  }

  componentWillUnmount() {
    window.document.body.classList.remove('overlay-shown')
    document.removeEventListener('click', this.onClick)
    document.removeEventListener('keydown', this.onKeydown)
  }

  render() {
    return (
      <Fragment>
        <div className="overlay-backdrop"/>
        <div className="overlay-wrapper" ref={this.wrapper}>
          <button className="overlay-close" onClick={this.close}>&times;</button>
          <div className="overlay-block" ref={this.block}>
            {this.props.children}
          </div>
        </div>
      </Fragment>
    )
  }

  close() {
    let {history, backUrl} = this.props

    history.push(backUrl)
  }

  onClick(event) {
    if (event.target === this.wrapper.current) {
      this.close()
    }
  }

  onKeydown(event) {
    if (event.keyCode === 27) {
      this.close()
    }
  }
}
