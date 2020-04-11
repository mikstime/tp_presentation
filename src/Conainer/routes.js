import {Container} from './index'
import { Indicator } from '../Indicator'
import Zeros from '../0'
import First from '../1'
import Second from '../2'
import Third from '../3'
import Forth from '../4'
import Fifth from '../5'
import Sixs from '../6'
import Sevens from '../7'

const Routes = [
  {
    path: '/',
    alwaysOn: true,
    element: new Container('#holder'),
  },
  {
    path: 'indicator',
    alwaysOn : true,
    element : new Indicator('#indicator')
  },
  ...Sevens,
  ...Sixs,
  ...Fifth,
  ...Forth,
  ...Third,
  ...Second,
  ...First,
  ...Zeros,
]

export default Routes