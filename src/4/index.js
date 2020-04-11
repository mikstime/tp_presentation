import {Page} from 'j4skit'
import './style.sass'
import template from './index.pug'

class Slide extends Page {
  render() {
    return template(this.props)
  }
}

export default [{
  path: '4',
  element: new Slide('#current_page'),
}]