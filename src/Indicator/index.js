import {Page} from 'j4skit'
import template from './index.pug'
import './style.sass'
import Navigator from '../initNavigator'
class Indicator extends Page {
  #current;
  constructor(props) {
    super(props);
    this.props.total = 7;
    document.addEventListener('keydown', ({key}) => {
      if(key === 'ArrowRight') {
        if(this.#current < this.props.total)  {
          Navigator.showPage(`/${Number(this.#current) + 1}`)
        }
      } else if (key === 'ArrowLeft') {
        if( this.#current > 0) {
          Navigator.showPage(`/${this.#current - 1}`);
        }
      }
    })
  }
  render() {
    return template(this.props);
  }
  componentWillUpdate() {
    super.componentWillUpdate();
    const current = window.location
      .pathname.replace(/\D+/g, '');
    this.#current = current;
    updateIndex(current, this.props.total);
  }
  componentDidMount() {
    super.componentDidMount();
    const current = window.location
      .pathname.replace(/\D+/g, '');
    this.#current = current;
    updateIndex(current, this.props.total);
  }
  
}
const updateIndex = (current, total) => {
  const curE = document.getElementById('cur_ind');
  if(curE) curE.style = `flex: ${current}`;
  const totE = document.getElementById('tot_ind');
  if(totE) totE.style = `flex: ${total - current}`
}
export {
  Indicator
}