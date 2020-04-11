import {Page} from 'j4skit'
import Navigator from '../../initNavigator'
class Display extends Page {
  render() {
    return this.props.counter.toString() || '0'
  }
}

const displayElement = new Display('#smart_counter')
displayElement.props.counter = 0;

class Counter extends Page {
  render() {
    return `
    <div class="counter">
        <div class="counter--button" id="smart_button">
            Увеличить
        </div>
        <div class="counter--counter" id="smart_counter">
        </div>
    <div/>
    `
  }
  
  componentDidMount() {
    super.componentDidMount();
    document
      .getElementById('smart_button')
      .addEventListener('click', () => {
        ++displayElement.props.counter;
        Navigator.updateAllPages();
      })
  }
}

const Routes = [
  {
    path: 'smart',
    alwaysOn: true,
    element: new Counter('#smart_counter_holder'),
    childRoutes: [
      {
        path: 'display',
        alwaysOn: true,
        element: displayElement,
      }
    ]
  },
]

export default Routes