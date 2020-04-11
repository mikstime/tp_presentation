import {Page} from 'j4skit'
import './style.sass'
import template from './index.pug'
import SMART_ROUTES from './smart'
import NOT_SMART_ROUTES from './notsmart'
class Slide extends Page {
  render() {
    return template(this.props)
  }
}

export default [{
  path: '6',
  element: new Slide('#current_page'),
  childRoutes: [
    ...SMART_ROUTES,
    ...NOT_SMART_ROUTES,
  ]
}]