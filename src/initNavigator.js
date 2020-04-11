import {Navigator} from 'j4skit';
import { Container } from './Conainer'
import Routes from './Conainer/routes'

const Instance = new Navigator;

Instance.addRoutes(Routes);

export default Instance