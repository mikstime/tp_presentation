import {Page} from 'j4skit'
import Navigator from '../../initNavigator'

class Counter extends Page {
  
  constructor(props) {
    super(props)
    this.props.counter = 0;
  }
  render() {
    return `
    <div class="counter">
        <div class="counter--button" id="notsmart_button">
            Увеличить
        </div>
        <div class="counter--counter">
        ${this.props.counter}
        </div>
    <div/>
    `
  }
  
  componentDidMount() {
    super.componentDidMount();
    document
      .getElementById('notsmart_button')
      .addEventListener('click', () => {
        ++this.props.counter;
        Navigator.updateAllPages();
      })
  }
}

const Routes = [
  {
    path: 'notsmart',
    alwaysOn: true,
    element: new Counter('#notsmart_counter_holder'),
  },
]

export default Routes