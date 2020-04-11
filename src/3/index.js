import {Page} from 'j4skit'
import './style.sass'
import template from './index.pug'

class Slide extends Page {
  render() {
    return template(this.props)
  }
  
  componentDidMount() {
    super.componentDidMount();
    const left = document.getElementById('left')
    const center = document.getElementById('center')
    const right = document.getElementById('right')
    addHoverEffect(left, 'Молодая аудитория')
    addHoverEffect(right, 'Современный дизайн')
    addHoverEffect(center, 'Меньше форм и быстрый старт')
  }
}
const addHoverEffect = (el, text) => {
  el.addEventListener('mouseover', () => {
    const oldText = el.innerText;
    el.innerText = text;
    const outEvent = () => {
      el.innerText = oldText;
      el.removeEventListener('mouseout', outEvent);
    }
    el.addEventListener('mouseout', outEvent);
  })
}
export default [{
  path: '3',
  element: new Slide('#current_page'),
}]